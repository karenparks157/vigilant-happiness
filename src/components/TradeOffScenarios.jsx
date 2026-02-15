import { tradeOffScenarios } from '../data/surveyData';

function ScenarioCard({ scenario, answer, onAnswer }) {
  const selected = answer?.choice;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-200 overflow-hidden">
      <div className="px-6 py-4 bg-navy-800 text-white">
        <h3 className="text-lg font-semibold">{scenario.title}</h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Deal A */}
          <button
            onClick={() => onAnswer(scenario.id, { ...answer, choice: 'A' })}
            className={`text-left p-5 rounded-xl border-2 transition cursor-pointer ${
              selected === 'A'
                ? 'border-gold-400 bg-gold-50 ring-2 ring-gold-200'
                : 'border-navy-200 hover:border-navy-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selected === 'A' ? 'border-gold-500 bg-gold-500' : 'border-navy-300'
              }`}>
                {selected === 'A' && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h4 className="font-semibold text-navy-800">{scenario.dealA.name}</h4>
            </div>
            <ul className="space-y-1.5">
              {scenario.dealA.details.map((detail, i) => (
                <li key={i} className="text-sm text-navy-600 flex items-start gap-2">
                  <span className="text-navy-400 mt-1 flex-shrink-0">&bull;</span>
                  {detail}
                </li>
              ))}
            </ul>
          </button>

          {/* Deal B */}
          <button
            onClick={() => onAnswer(scenario.id, { ...answer, choice: 'B' })}
            className={`text-left p-5 rounded-xl border-2 transition cursor-pointer ${
              selected === 'B'
                ? 'border-gold-400 bg-gold-50 ring-2 ring-gold-200'
                : 'border-navy-200 hover:border-navy-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selected === 'B' ? 'border-gold-500 bg-gold-500' : 'border-navy-300'
              }`}>
                {selected === 'B' && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h4 className="font-semibold text-navy-800">{scenario.dealB.name}</h4>
            </div>
            <ul className="space-y-1.5">
              {scenario.dealB.details.map((detail, i) => (
                <li key={i} className="text-sm text-navy-600 flex items-start gap-2">
                  <span className="text-navy-400 mt-1 flex-shrink-0">&bull;</span>
                  {detail}
                </li>
              ))}
            </ul>
          </button>
        </div>

        {selected && (
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1.5">
              Why did you choose Deal {selected}?
            </label>
            <textarea
              value={answer?.reasoning || ''}
              onChange={(e) => onAnswer(scenario.id, { ...answer, reasoning: e.target.value })}
              placeholder="Share your rationale..."
              rows={3}
              className="w-full px-4 py-2.5 border border-navy-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition text-sm resize-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function TradeOffScenarios({ tradeOffAnswers, setTradeOff, onNext, onPrev }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Trade-Off Scenarios</h2>
        <p className="text-navy-600">
          For each scenario, choose which deal you'd prefer to pursue and explain your reasoning.
        </p>
      </div>

      <div className="space-y-6">
        {tradeOffScenarios.map((scenario, idx) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            answer={tradeOffAnswers[scenario.id]}
            onAnswer={setTradeOff}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-2.5 rounded-lg font-medium text-navy-600 border border-navy-300 hover:bg-navy-100 transition cursor-pointer"
        >
          &larr; Back
        </button>
        <button
          onClick={onNext}
          className="px-8 py-2.5 rounded-lg font-semibold text-white bg-navy-800 hover:bg-navy-900 transition shadow-sm cursor-pointer"
        >
          Continue to Conviction &rarr;
        </button>
      </div>
    </div>
  );
}
