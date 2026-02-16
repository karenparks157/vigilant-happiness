import { strategyQuestions } from '../data/surveyData';

export default function StrategyQuestions({ strategyAnswers, setStrategy, onNext, onPrev }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Open Response</h2>
        <p className="text-navy-600">
          Share your strategic perspective on consumer subsectors.
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
