import { convictionQuestions } from '../data/surveyData';

export default function ConvictionQuestions({ convictionAnswers, setConviction, onNext, onPrev }) {
  // convictionAnswers for checkbox-with-other: { selected: string[], otherText: string }
  const toggleCheckbox = (questionId, option, maxSelect) => {
    const current = convictionAnswers[questionId] || { selected: [], otherText: '' };
    const selected = current.selected || [];
    let next;
    if (selected.includes(option)) {
      next = selected.filter(o => o !== option);
    } else if (maxSelect && selected.length >= maxSelect) {
      return; // at limit, don't add more
    } else {
      next = [...selected, option];
    }
    setConviction(questionId, { ...current, selected: next });
  };

  const setOtherText = (questionId, text) => {
    const current = convictionAnswers[questionId] || { selected: [], otherText: '' };
    setConviction(questionId, { ...current, otherText: text });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Conviction Building</h2>
        <p className="text-navy-600">
          Help us understand your conviction thresholds and what drives your confidence in a deal.
        </p>
      </div>

      <div className="space-y-6">
        {convictionQuestions.map((q, idx) => {
          const answer = convictionAnswers[q.id] || { selected: [], otherText: '' };
          const selected = answer.selected || [];

          return (
            <div key={q.id} className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
              <h3 className="font-semibold text-navy-800 mb-4">
                {q.question}
              </h3>

              <div className="space-y-2">
                {q.options.map(option => {
                  const isSelected = selected.includes(option);
                  const atLimit = q.maxSelect && selected.length >= q.maxSelect && !isSelected;
                  return (
                    <button
                      key={option}
                      onClick={() => toggleCheckbox(q.id, option, q.maxSelect)}
                      disabled={atLimit}
                      className={`w-full text-left p-3 rounded-lg border-2 transition flex items-start gap-3 ${
                        isSelected
                          ? 'border-gold-400 bg-gold-50 cursor-pointer'
                          : atLimit
                          ? 'border-navy-100 bg-navy-50 text-navy-400 cursor-not-allowed'
                          : 'border-navy-200 hover:border-navy-300 cursor-pointer'
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

                {q.hasOther && (
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Other <span className="font-normal text-navy-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={answer.otherText || ''}
                      onChange={(e) => setOtherText(q.id, e.target.value)}
                      placeholder="Anything else that would move the needle..."
                      className="w-full px-4 py-2.5 border border-navy-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition text-sm"
                    />
                  </div>
                )}
              </div>

              {selected.length > 0 && (
                <p className="mt-3 text-xs text-navy-500">
                  {selected.length}{q.maxSelect ? `/${q.maxSelect}` : ''} selected
                </p>
              )}
            </div>
          );
        })}
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
          Continue to Dealbreakers &rarr;
        </button>
      </div>
    </div>
  );
}
