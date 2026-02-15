import { useState, useMemo } from 'react';
import { getAllResponses, clearAllResponses } from '../hooks/useSurveyState';
import { allSubsectors, subsectorCategories, tradeOffScenarios, convictionQuestions, dealbreakerQuestions, strategyQuestions } from '../data/surveyData';

function HeatmapCell({ value, max }) {
  if (!value) return <td className="px-2 py-1 text-center text-xs text-navy-300">—</td>;
  const intensity = max > 0 ? value / max : 0;
  const bg = intensity > 0.8
    ? 'bg-green-600 text-white'
    : intensity > 0.6
    ? 'bg-green-400 text-white'
    : intensity > 0.4
    ? 'bg-green-300 text-navy-800'
    : intensity > 0.2
    ? 'bg-green-200 text-navy-700'
    : 'bg-green-100 text-navy-600';

  return (
    <td className={`px-2 py-1 text-center text-xs font-medium rounded ${bg}`}>
      {value.toFixed(1)}
    </td>
  );
}

export default function AdminDashboard({ onExit }) {
  const [responses, setResponses] = useState(getAllResponses());
  const [activeTab, setActiveTab] = useState('overview');

  const refreshData = () => setResponses(getAllResponses());

  const handleClear = () => {
    if (window.confirm('Are you sure you want to delete ALL survey responses? This cannot be undone.')) {
      clearAllResponses();
      setResponses([]);
    }
  };

  // Compute aggregate stats
  const stats = useMemo(() => {
    if (responses.length === 0) return null;

    // Average ratings per subsector
    const ratingAgg = {};
    const ratingCounts = {};
    responses.forEach(r => {
      Object.entries(r.ratings || {}).forEach(([code, val]) => {
        if (val > 0) {
          ratingAgg[code] = (ratingAgg[code] || 0) + val;
          ratingCounts[code] = (ratingCounts[code] || 0) + 1;
        }
      });
    });
    const avgRatings = {};
    Object.keys(ratingAgg).forEach(code => {
      avgRatings[code] = ratingAgg[code] / ratingCounts[code];
    });

    // Top 10 consensus
    const topTenCounts = {};
    const topTenRankSum = {};
    responses.forEach(r => {
      (r.topTen || []).forEach((code, idx) => {
        topTenCounts[code] = (topTenCounts[code] || 0) + 1;
        topTenRankSum[code] = (topTenRankSum[code] || 0) + (idx + 1);
      });
    });

    // Top-rated subsectors
    const topRated = Object.entries(avgRatings)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 20)
      .map(([code, avg]) => ({
        ...allSubsectors.find(s => s.code === code),
        avgRating: avg,
        ratedBy: ratingCounts[code],
      }));

    // Consensus: subsectors in 3+ people's top 10
    const consensusSubsectors = Object.entries(topTenCounts)
      .filter(([, count]) => count >= 3)
      .sort(([, a], [, b]) => b - a)
      .map(([code, count]) => ({
        ...allSubsectors.find(s => s.code === code),
        count,
        avgRank: topTenRankSum[code] / count,
      }));

    // Trade-off results
    const tradeOffResults = tradeOffScenarios.map(scenario => {
      let choiceA = 0, choiceB = 0;
      responses.forEach(r => {
        const ans = r.tradeOffAnswers?.[scenario.id];
        if (ans?.choice === 'A') choiceA++;
        else if (ans?.choice === 'B') choiceB++;
      });
      return { ...scenario, choiceA, choiceB };
    });

    // Dealbreaker frequency
    const dealbreakerCounts = {};
    responses.forEach(r => {
      (r.dealbreakerAnswers || []).forEach(db => {
        dealbreakerCounts[db] = (dealbreakerCounts[db] || 0) + 1;
      });
    });
    const topDealbreakers = Object.entries(dealbreakerCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([name, count]) => ({ name, count, pct: (count / responses.length * 100) }));

    return {
      avgRatings,
      ratingCounts,
      topRated,
      consensusSubsectors,
      tradeOffResults,
      topDealbreakers,
    };
  }, [responses]);

  const exportCSV = () => {
    if (responses.length === 0) return;

    // Build header
    const subsectorCodes = allSubsectors.map(s => s.code);
    const headers = [
      'ID', 'Name', 'Email', 'Title', 'Submitted At',
      ...subsectorCodes.map(c => `Rating_${c}`),
      'Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8', 'Top9', 'Top10',
      ...tradeOffScenarios.map(s => `TradeOff_${s.id}_Choice`),
      ...tradeOffScenarios.map(s => `TradeOff_${s.id}_Reasoning`),
      ...convictionQuestions.map(q => `Conviction_${q.id}`),
      'Dealbreakers',
      ...strategyQuestions.map(q => `Strategy_${q.id}`),
    ];

    const rows = responses.map(r => {
      const row = [
        r.id,
        r.respondent?.name || '',
        r.respondent?.email || '',
        r.respondent?.title || '',
        r.submittedAt || '',
        ...subsectorCodes.map(c => r.ratings?.[c] || ''),
        ...Array.from({ length: 10 }, (_, i) => r.topTen?.[i] || ''),
        ...tradeOffScenarios.map(s => r.tradeOffAnswers?.[s.id]?.choice || ''),
        ...tradeOffScenarios.map(s => r.tradeOffAnswers?.[s.id]?.reasoning || ''),
        ...convictionQuestions.map(q => {
          const ans = r.convictionAnswers?.[q.id];
          return Array.isArray(ans) ? ans.join(' > ') : ans || '';
        }),
        (r.dealbreakerAnswers || []).join('; '),
        ...strategyQuestions.map(q => r.strategyAnswers?.[q.id] || ''),
      ];
      return row;
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(row =>
        row.map(cell => {
          const str = String(cell).replace(/"/g, '""');
          return str.includes(',') || str.includes('"') || str.includes('\n')
            ? `"${str}"`
            : str;
        }).join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `survey-responses-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'table', label: 'All Responses' },
    { id: 'heatmap', label: 'Heatmap' },
    { id: 'consensus', label: 'Consensus' },
    { id: 'tradeoffs', label: 'Trade-Offs' },
    { id: 'dealbreakers', label: 'Dealbreakers' },
    { id: 'responses', label: 'Detail' },
  ];

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Header */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="text-navy-300 hover:text-white transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <span className="bg-navy-700 text-navy-300 px-2 py-0.5 rounded text-sm">
              {responses.length} response{responses.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={refreshData}
              className="px-3 py-1.5 text-sm bg-navy-700 hover:bg-navy-600 rounded-lg transition cursor-pointer"
            >
              Refresh
            </button>
            <button
              onClick={exportCSV}
              disabled={responses.length === 0}
              className="px-3 py-1.5 text-sm bg-gold-500 text-navy-900 font-semibold hover:bg-gold-400 rounded-lg transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Export CSV
            </button>
            <button
              onClick={handleClear}
              disabled={responses.length === 0}
              className="px-3 py-1.5 text-sm bg-red-600 hover:bg-red-700 rounded-lg transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 -mb-px">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-navy-50 text-navy-800'
                    : 'text-navy-400 hover:text-white hover:bg-navy-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {responses.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-navy-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-navy-700">No Responses Yet</h3>
            <p className="text-navy-500 mt-1">Responses will appear here after partners submit the survey.</p>
          </div>
        ) : (
          <>
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && stats && (
              <div className="space-y-6">
                {/* Summary cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-navy-200">
                    <p className="text-sm text-navy-500">Responses</p>
                    <p className="text-3xl font-bold text-navy-900">{responses.length}</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-navy-200">
                    <p className="text-sm text-navy-500">Avg Subsectors Rated</p>
                    <p className="text-3xl font-bold text-navy-900">
                      {Math.round(responses.reduce((sum, r) =>
                        sum + Object.values(r.ratings || {}).filter(v => v > 0).length, 0
                      ) / responses.length)}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-navy-200">
                    <p className="text-sm text-navy-500">Consensus Picks</p>
                    <p className="text-3xl font-bold text-navy-900">{stats.consensusSubsectors.length}</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-navy-200">
                    <p className="text-sm text-navy-500">Top Rated</p>
                    <p className="text-lg font-bold text-navy-900 truncate">
                      {stats.topRated[0]?.name || '—'}
                    </p>
                  </div>
                </div>

                {/* Top Rated List */}
                <div className="bg-white rounded-xl border border-navy-200 p-6">
                  <h3 className="font-semibold text-navy-800 mb-4">Top 20 Highest-Rated Subsectors</h3>
                  <div className="space-y-2">
                    {stats.topRated.map((sub, idx) => (
                      <div key={sub.code} className="flex items-center gap-3">
                        <span className="text-sm font-bold text-navy-400 w-6 text-right">{idx + 1}</span>
                        <span className="text-xs font-mono bg-navy-100 text-navy-600 px-1.5 py-0.5 rounded">{sub.code}</span>
                        <span className="text-sm font-medium text-navy-800 flex-1">{sub.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-navy-100 rounded-full h-2">
                            <div
                              className="bg-gold-500 h-2 rounded-full"
                              style={{ width: `${(sub.avgRating / 5) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-navy-700 w-8">{sub.avgRating.toFixed(1)}</span>
                          <span className="text-xs text-navy-400">({sub.ratedBy})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ALL RESPONSES TABLE TAB */}
            {activeTab === 'table' && (
              <div className="bg-white rounded-xl border border-navy-200 overflow-hidden">
                <div className="p-6 border-b border-navy-200">
                  <h3 className="font-semibold text-navy-800">All Responses</h3>
                  <p className="text-sm text-navy-500 mt-1">{responses.length} total submissions</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-navy-50 border-b border-navy-200">
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">#</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">Title</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider text-center">Rated</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider text-center">Top 10</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider text-center">Scenarios</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider text-center">Dealbreakers</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">Submitted</th>
                        <th className="px-4 py-3 text-xs font-semibold text-navy-600 uppercase tracking-wider">#1 Pick</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100">
                      {responses.map((r, idx) => {
                        const topPick = r.topTen?.[0] ? allSubsectors.find(s => s.code === r.topTen[0]) : null;
                        return (
                          <tr key={r.id} className="hover:bg-navy-50 transition">
                            <td className="px-4 py-3 text-sm text-navy-500 font-medium">{idx + 1}</td>
                            <td className="px-4 py-3 text-sm font-medium text-navy-800">{r.respondent?.name}</td>
                            <td className="px-4 py-3 text-sm text-navy-600">{r.respondent?.email}</td>
                            <td className="px-4 py-3 text-sm text-navy-600">{r.respondent?.title || '—'}</td>
                            <td className="px-4 py-3 text-sm text-center text-navy-700 font-medium">
                              {Object.values(r.ratings || {}).filter(v => v > 0).length}
                            </td>
                            <td className="px-4 py-3 text-sm text-center text-navy-700 font-medium">
                              {(r.topTen || []).length}/10
                            </td>
                            <td className="px-4 py-3 text-sm text-center text-navy-700 font-medium">
                              {tradeOffScenarios.filter(s => r.tradeOffAnswers?.[s.id]?.choice).length}/4
                            </td>
                            <td className="px-4 py-3 text-sm text-center text-navy-700 font-medium">
                              {(r.dealbreakerAnswers || []).length}
                            </td>
                            <td className="px-4 py-3 text-xs text-navy-500 whitespace-nowrap">
                              {new Date(r.submittedAt).toLocaleDateString()}{' '}
                              {new Date(r.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {topPick ? (
                                <span className="inline-flex items-center gap-1">
                                  <span className="font-mono text-xs text-navy-500">{topPick.code}</span>
                                  <span className="text-navy-700">{topPick.name}</span>
                                </span>
                              ) : (
                                <span className="text-navy-400">—</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* HEATMAP TAB */}
            {activeTab === 'heatmap' && stats && (
              <div className="bg-white rounded-xl border border-navy-200 p-6 overflow-x-auto">
                <h3 className="font-semibold text-navy-800 mb-4">Rating Heatmap by Category</h3>
                <p className="text-sm text-navy-500 mb-4">Average rating per subsector across all respondents</p>
                {subsectorCategories.map(cat => {
                  const maxAvg = Math.max(...cat.subsectors.map(s => stats.avgRatings[s.code] || 0), 1);
                  return (
                    <div key={cat.id} className="mb-6">
                      <h4 className="font-medium text-navy-700 mb-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                        {cat.name}
                      </h4>
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-navy-200">
                            <th className="py-1 pr-4 text-xs text-navy-500 font-medium">Code</th>
                            <th className="py-1 pr-4 text-xs text-navy-500 font-medium">Subsector</th>
                            <th className="py-1 px-2 text-xs text-navy-500 font-medium text-center">Avg</th>
                            <th className="py-1 px-2 text-xs text-navy-500 font-medium text-center">Count</th>
                            <th className="py-1 text-xs text-navy-500 font-medium">Distribution</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.subsectors.map(sub => {
                            const avg = stats.avgRatings[sub.code] || 0;
                            const count = stats.ratingCounts[sub.code] || 0;
                            return (
                              <tr key={sub.code} className="border-b border-navy-50">
                                <td className="py-1.5 pr-4 text-xs font-mono text-navy-500">{sub.code}</td>
                                <td className="py-1.5 pr-4 text-sm text-navy-700">{sub.name}</td>
                                <HeatmapCell value={avg || null} max={5} />
                                <td className="py-1.5 px-2 text-center text-xs text-navy-500">{count || '—'}</td>
                                <td className="py-1.5">
                                  {avg > 0 && (
                                    <div className="w-full bg-navy-100 rounded-full h-2">
                                      <div
                                        className="bg-gold-500 h-2 rounded-full transition-all"
                                        style={{ width: `${(avg / 5) * 100}%` }}
                                      />
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CONSENSUS TAB */}
            {activeTab === 'consensus' && stats && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-navy-200 p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Consensus View</h3>
                  <p className="text-sm text-navy-500 mb-4">
                    Subsectors appearing in 3 or more partners' Top 10 lists
                  </p>
                  {stats.consensusSubsectors.length > 0 ? (
                    <div className="space-y-3">
                      {stats.consensusSubsectors.map((sub, idx) => (
                        <div key={sub.code} className="flex items-center gap-4 p-3 bg-navy-50 rounded-lg">
                          <span className="text-lg font-bold text-navy-400 w-8 text-right">{idx + 1}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono bg-navy-200 text-navy-600 px-1.5 py-0.5 rounded">{sub.code}</span>
                              <span className="font-medium text-navy-800">{sub.name}</span>
                            </div>
                            <span className="text-xs text-navy-500">{sub.categoryName}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-navy-800">
                              {sub.count}/{responses.length} partners
                            </div>
                            <div className="text-xs text-navy-500">
                              Avg rank: #{sub.avgRank.toFixed(1)}
                            </div>
                          </div>
                          <div className="w-16">
                            <div className="w-full bg-navy-200 rounded-full h-3">
                              <div
                                className="bg-green-500 h-3 rounded-full"
                                style={{ width: `${(sub.count / responses.length) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-navy-400 text-center py-8">
                      Need more responses to identify consensus picks.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* TRADE-OFFS TAB */}
            {activeTab === 'tradeoffs' && stats && (
              <div className="space-y-6">
                {stats.tradeOffResults.map(scenario => {
                  const total = scenario.choiceA + scenario.choiceB;
                  const pctA = total > 0 ? (scenario.choiceA / total * 100) : 0;
                  const pctB = total > 0 ? (scenario.choiceB / total * 100) : 0;
                  return (
                    <div key={scenario.id} className="bg-white rounded-xl border border-navy-200 p-6">
                      <h3 className="font-semibold text-navy-800 mb-4">{scenario.title}</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-navy-700">{scenario.dealA.name}</span>
                            <span className="text-lg font-bold text-navy-800">{pctA.toFixed(0)}%</span>
                          </div>
                          <div className="w-full bg-navy-100 rounded-full h-4">
                            <div
                              className="bg-blue-500 h-4 rounded-full transition-all"
                              style={{ width: `${pctA}%` }}
                            />
                          </div>
                          <span className="text-xs text-navy-500">{scenario.choiceA} vote{scenario.choiceA !== 1 ? 's' : ''}</span>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-navy-700">{scenario.dealB.name}</span>
                            <span className="text-lg font-bold text-navy-800">{pctB.toFixed(0)}%</span>
                          </div>
                          <div className="w-full bg-navy-100 rounded-full h-4">
                            <div
                              className="bg-gold-500 h-4 rounded-full transition-all"
                              style={{ width: `${pctB}%` }}
                            />
                          </div>
                          <span className="text-xs text-navy-500">{scenario.choiceB} vote{scenario.choiceB !== 1 ? 's' : ''}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* DEALBREAKERS TAB */}
            {activeTab === 'dealbreakers' && stats && (
              <div className="bg-white rounded-xl border border-navy-200 p-6">
                <h3 className="font-semibold text-navy-800 mb-4">Dealbreaker Frequency</h3>
                <div className="space-y-3">
                  {stats.topDealbreakers.map(db => (
                    <div key={db.name} className="flex items-center gap-4">
                      <div className="flex-1">
                        <span className="text-sm text-navy-700">{db.name}</span>
                      </div>
                      <div className="w-48">
                        <div className="w-full bg-navy-100 rounded-full h-3">
                          <div
                            className="bg-red-400 h-3 rounded-full"
                            style={{ width: `${db.pct}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-navy-700 w-16 text-right">
                        {db.pct.toFixed(0)}%
                      </span>
                      <span className="text-xs text-navy-400 w-12">
                        ({db.count}/{responses.length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* INDIVIDUAL RESPONSES TAB */}
            {activeTab === 'responses' && (
              <div className="space-y-4">
                {responses.map((r, idx) => (
                  <div key={r.id} className="bg-white rounded-xl border border-navy-200 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-navy-800">{r.respondent?.name}</h3>
                        <p className="text-sm text-navy-500">{r.respondent?.email} &bull; {r.respondent?.title}</p>
                      </div>
                      <span className="text-xs text-navy-400">
                        {new Date(r.submittedAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-navy-500">Subsectors Rated</span>
                        <p className="font-semibold text-navy-800">
                          {Object.values(r.ratings || {}).filter(v => v > 0).length}
                        </p>
                      </div>
                      <div>
                        <span className="text-navy-500">Top 10 Filled</span>
                        <p className="font-semibold text-navy-800">{(r.topTen || []).length}/10</p>
                      </div>
                      <div>
                        <span className="text-navy-500">Scenarios Done</span>
                        <p className="font-semibold text-navy-800">
                          {tradeOffScenarios.filter(s => r.tradeOffAnswers?.[s.id]?.choice).length}/4
                        </p>
                      </div>
                      <div>
                        <span className="text-navy-500">Dealbreakers</span>
                        <p className="font-semibold text-navy-800">{(r.dealbreakerAnswers || []).length}</p>
                      </div>
                    </div>
                    {(r.topTen || []).length > 0 && (
                      <div className="mt-3">
                        <span className="text-xs text-navy-500">Top 10:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {r.topTen.map((code, i) => {
                            const sub = allSubsectors.find(s => s.code === code);
                            return (
                              <span key={code} className="inline-flex items-center gap-1 px-2 py-0.5 bg-navy-100 rounded text-xs">
                                <span className="font-bold text-navy-600">#{i + 1}</span>
                                <span className="font-mono text-navy-500">{code}</span>
                                <span className="text-navy-700">{sub?.name}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
