import { allSubsectors, tradeOffScenarios, convictionQuestions, dealbreakerQuestions, strategyQuestions } from '../data/surveyData';

export default function ReviewSubmit({
  respondent,
  ratings,
  topTen,
  tradeOffAnswers,
  convictionAnswers,
  dealbreakerAnswers,
  strategyAnswers,
  onSubmit,
  onPrev,
}) {
  const ratedCount = Object.values(ratings).filter(v => v > 0).length;
  const topTenItems = topTen.map(code => allSubsectors.find(s => s.code === code)).filter(Boolean);
  const scenariosAnswered = tradeOffScenarios.filter(s => tradeOffAnswers[s.id]?.choice).length;
  const convictionAnswered = convictionQuestions.filter(q => convictionAnswers[q.id]).length;
  const strategyAnswered = strategyQuestions.filter(q => {
    const ans = strategyAnswers[q.id];
    return ans && (typeof ans === 'string' ? ans.trim() : true);
  }).length;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Review & Submit</h2>
        <p className="text-navy-600">
          Review your responses before submitting. You can go back to any section to make changes.
        </p>
      </div>

      <div className="space-y-4">
        {/* Respondent Info */}
        <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-3">Respondent</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-navy-500">Name:</span>
              <p className="font-medium text-navy-800">{respondent.name}</p>
            </div>
            <div>
              <span className="text-navy-500">Email:</span>
              <p className="font-medium text-navy-800">{respondent.email}</p>
            </div>
            <div>
              <span className="text-navy-500">Title:</span>
              <p className="font-medium text-navy-800">{respondent.title || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Ratings Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-navy-800">Subsector Ratings</h3>
            <span className="text-sm text-navy-500">{ratedCount} subsectors rated</span>
          </div>
          {ratedCount > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {Object.entries(ratings)
                .filter(([, v]) => v >= 4)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 15)
                .map(([code, val]) => {
                  const sub = allSubsectors.find(s => s.code === code);
                  return (
                    <span
                      key={code}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-navy-100 rounded-md text-xs"
                    >
                      <span className="font-mono text-navy-500">{code}</span>
                      <span className="text-navy-700">{sub?.name}</span>
                      <span className="text-gold-500">{'★'.repeat(val)}</span>
                    </span>
                  );
                })}
              {Object.entries(ratings).filter(([, v]) => v >= 4).length > 15 && (
                <span className="text-xs text-navy-500 self-center">
                  +{Object.entries(ratings).filter(([, v]) => v >= 4).length - 15} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Top 10 */}
        <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-navy-800">Top 10 Rankings</h3>
            <span className="text-sm text-navy-500">{topTen.length}/10 selected</span>
          </div>
          {topTenItems.length > 0 ? (
            <ol className="space-y-1.5">
              {topTenItems.map((item, idx) => (
                <li key={item.code} className="flex items-center gap-2 text-sm">
                  <span className="w-6 h-6 bg-navy-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-mono text-navy-500 text-xs">{item.code}</span>
                  <span className="text-navy-700">{item.name}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-navy-400">No subsectors ranked yet</p>
          )}
        </div>

        {/* Trade-offs */}
        <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-navy-800">Trade-Off Scenarios</h3>
            <span className="text-sm text-navy-500">{scenariosAnswered}/4 answered</span>
          </div>
          <div className="space-y-2">
            {tradeOffScenarios.map(scenario => {
              const answer = tradeOffAnswers[scenario.id];
              return (
                <div key={scenario.id} className="text-sm flex items-center gap-2">
                  {answer?.choice ? (
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-navy-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                    </svg>
                  )}
                  <span className="text-navy-700">{scenario.title}</span>
                  {answer?.choice && (
                    <span className="text-navy-500">— Deal {answer.choice}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Conviction + Dealbreakers + Strategy summary */}
        <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-3">Other Sections</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-navy-600">Conviction Questions</span>
              <span className="text-navy-500">{convictionAnswered}/{convictionQuestions.length} answered</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-navy-600">Dealbreakers</span>
              <span className="text-navy-500">{dealbreakerAnswers.length} selected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-navy-600">Resource Allocation & Open Response</span>
              <span className="text-navy-500">{strategyAnswered}/{strategyQuestions.length} answered</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-2.5 rounded-lg font-medium text-navy-600 border border-navy-300 hover:bg-navy-100 transition cursor-pointer"
        >
          &larr; Back
        </button>
        <button
          onClick={onSubmit}
          className="px-10 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition shadow-sm cursor-pointer"
        >
          Submit Survey
        </button>
      </div>
    </div>
  );
}
