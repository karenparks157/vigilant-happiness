import { strategyQuestions } from '../data/surveyData';

export default function StrategyQuestions({ strategyAnswers, setStrategy, onNext, onPrev }) {
  const toggleCheckboxItem = (questionId, option) => {
    const current = strategyAnswers[questionId] || [];
    const arr = Array.isArray(current) ? current : [];
    const next = arr.includes(option)
      ? arr.filter(o => o !== option)
      : [...arr, option];
    setStrategy(questionId, next);
  };

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
            <h3 className="font-semibold text-navy-800 mb-1">
              <span className="text-gold-500 mr-2">{idx + 1}.</span>
              {q.question}
            </h3>
            {q.subtitle && (
              <p className="text-sm text-navy-600 mb-3 italic">{q.subtitle}</p>
            )}
            {!q.subtitle && <div className="mb-3" />}

            {q.type === 'multiple-choice' && (
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
            )}

            {q.type === 'checkbox' && (
              <div className="space-y-2">
                {q.options.map(option => {
                  const selected = Array.isArray(strategyAnswers[q.id]) ? strategyAnswers[q.id] : [];
                  const isSelected = selected.includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => toggleCheckboxItem(q.id, option)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-gold-400 bg-gold-50'
                          : 'border-navy-200 hover:border-navy-300'
                      }`}
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition ${
                        isSelected
                          ? 'bg-gold-500 border-gold-500'
                          : 'border-navy-300'
                      }`}>
                        {isSelected && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-navy-700">{option}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {q.type === 'open' && (
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
