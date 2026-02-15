import { dealbreakerQuestions } from '../data/surveyData';

export default function Dealbreakers({ dealbreakerAnswers, setDealbreakerAnswers, onNext, onPrev }) {
  const question = dealbreakerQuestions[0];

  const toggleOption = (option) => {
    setDealbreakerAnswers(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Dealbreakers</h2>
        <p className="text-navy-600">
          Identify which factors would be automatic disqualifiers for a potential investment.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
        <h3 className="font-semibold text-navy-800 mb-1">{question.question}</h3>
        <p className="text-sm text-navy-500 mb-5">
          Selected: {dealbreakerAnswers.length} of {question.options.length}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.options.map(option => {
            const isSelected = dealbreakerAnswers.includes(option);
            return (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={`text-left p-4 rounded-lg border-2 transition flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'border-red-300 bg-red-50'
                    : 'border-navy-200 hover:border-navy-300'
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition ${
                  isSelected
                    ? 'bg-red-500 border-red-500'
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
          Continue to Strategy &rarr;
        </button>
      </div>
    </div>
  );
}
