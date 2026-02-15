import { useState } from 'react';
import { convictionQuestions } from '../data/surveyData';

function RankingQuestion({ question, answer, onChange }) {
  const [dragIndex, setDragIndex] = useState(null);
  const items = answer || [...question.options];

  const handleDragStart = (idx) => {
    setDragIndex(idx);
  };

  const handleDrop = (dropIdx) => {
    if (dragIndex === null || dragIndex === dropIdx) return;
    const newItems = [...items];
    const dragged = newItems[dragIndex];
    newItems.splice(dragIndex, 1);
    newItems.splice(dropIdx, 0, dragged);
    onChange(question.id, newItems);
    setDragIndex(null);
  };

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div
          key={item}
          draggable
          onDragStart={() => handleDragStart(idx)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(idx)}
          className={`flex items-center gap-3 p-3 bg-white rounded-lg border border-navy-200 cursor-grab active:cursor-grabbing hover:border-navy-300 transition ${
            dragIndex === idx ? 'opacity-40' : ''
          }`}
        >
          <div className="flex-shrink-0 w-7 h-7 bg-navy-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {idx + 1}
          </div>
          <svg className="w-4 h-4 text-navy-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
          <span className="text-sm text-navy-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function ConvictionQuestions({ convictionAnswers, setConviction, onNext, onPrev }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Conviction Questions</h2>
        <p className="text-navy-600">
          Help us understand your investment preferences and priorities.
        </p>
      </div>

      <div className="space-y-6">
        {convictionQuestions.map((q, idx) => (
          <div key={q.id} className="bg-white rounded-xl shadow-sm border border-navy-200 p-6">
            <h3 className="font-semibold text-navy-800 mb-4">
              <span className="text-gold-500 mr-2">{idx + 1}.</span>
              {q.question}
            </h3>

            {q.type === 'multiple-choice' && (
              <div className="space-y-2">
                {q.options.map(option => (
                  <button
                    key={option}
                    onClick={() => setConviction(q.id, option)}
                    className={`w-full text-left p-3 rounded-lg border transition flex items-center gap-3 cursor-pointer ${
                      convictionAnswers[q.id] === option
                        ? 'border-gold-400 bg-gold-50 ring-1 ring-gold-200'
                        : 'border-navy-200 hover:border-navy-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      convictionAnswers[q.id] === option
                        ? 'border-gold-500 bg-gold-500'
                        : 'border-navy-300'
                    }`}>
                      {convictionAnswers[q.id] === option && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-sm text-navy-700">{option}</span>
                  </button>
                ))}
              </div>
            )}

            {q.type === 'ranking' && (
              <div>
                <p className="text-xs text-navy-500 mb-3">Drag items to reorder</p>
                <RankingQuestion
                  question={q}
                  answer={convictionAnswers[q.id]}
                  onChange={setConviction}
                />
              </div>
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
          Continue to Dealbreakers &rarr;
        </button>
      </div>
    </div>
  );
}
