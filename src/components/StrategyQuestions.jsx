import { strategyQuestions } from '../data/surveyData';

export default function StrategyQuestions({ strategyAnswers, setStrategy, onNext, onPrev }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Resource Allocation & Open Response</h2>
        <p className="text-navy-600">
          Help us calibrate how we should allocate resources, then share your strategic perspective.
        </p>
      </div>

      <div className="space-y-6">
        {strategyQuestions.map((q, idx) => (
          <div key={q.id} className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
            <h3 className="font-semibold text-navy-800 mb-3">
              <span className="text-gold-500 mr-2">{idx + 1}.</span>
              {q.question}
            </h3>

            {q.type === 'multiple-choice' ? (
              <div className="space-y-2">
                {q.options.map(option => (
                  <button
                    key={option}
                    onClick={() => setStrategy(q.id, option)}
                    className={`w-full text-left p-3 rounded-lg border transition flex items-center gap-3 cursor-pointer ${
                      strategyAnswers[q.id] === option
                        ? 'border-gold-400 bg-gold-50 ring-1 ring-gold-200'
                        : 'border-navy-200 hover:border-navy-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      strategyAnswers[q.id] === option
                        ? 'border-gold-500 bg-gold-500'
                        : 'border-navy-300'
                    }`}>
                      {strategyAnswers[q.id] === option && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-sm text-navy-700">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                value={strategyAnswers[q.id] || ''}
                onChange={(e) => setStrategy(q.id, e.target.value)}
                placeholder="Share your thoughts..."
                rows={4}
                className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition text-sm resize-none"
              />
            )}
          </div>
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
          Review & Submit &rarr;
        </button>
      </div>
    </div>
  );
}
