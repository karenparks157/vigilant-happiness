import { useState } from 'react';
import { subsectorCategories } from '../data/surveyData';
import StarRating from './StarRating';

function CategorySection({ category, ratings, setRating, isExpanded, onToggle }) {
  const ratedCount = category.subsectors.filter(s => ratings[s.code] > 0).length;
  const totalCount = category.subsectors.length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-navy-50 transition cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: category.color }}
          />
          <h3 className="text-lg font-semibold text-navy-800">{category.name}</h3>
          <span className="text-sm text-navy-500">
            ({ratedCount}/{totalCount} rated)
          </span>
        </div>
        <div className="flex items-center gap-3">
          {ratedCount === totalCount && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              Complete
            </span>
          )}
          <svg
            className={`w-5 h-5 text-navy-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-navy-100">
          {category.subsectors.map((subsector, idx) => (
            <div
              key={subsector.code}
              className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                idx > 0 ? 'border-t border-navy-100' : ''
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-navy-100 text-navy-600 px-1.5 py-0.5 rounded flex-shrink-0">
                    {subsector.code}
                  </span>
                  <span className="font-medium text-navy-800">{subsector.name}</span>
                </div>
                <p className="text-sm text-navy-500 mt-0.5 ml-0 sm:ml-8">{subsector.description}</p>
              </div>
              <div className="flex-shrink-0 sm:ml-4">
                <StarRating
                  value={ratings[subsector.code] || 0}
                  onChange={val => setRating(subsector.code, val)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SubsectorRating({ ratings, setRating, onNext, onPrev }) {
  const [expandedCategories, setExpandedCategories] = useState(
    new Set([subsectorCategories[0].id])
  );

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(catId)) next.delete(catId);
      else next.add(catId);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedCategories(new Set(subsectorCategories.map(c => c.id)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  const totalSubsectors = subsectorCategories.reduce((acc, c) => acc + c.subsectors.length, 0);
  const ratedCount = Object.values(ratings).filter(v => v > 0).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Rate Consumer Subsectors</h2>
        <p className="text-navy-600">
          Rate each subsector from 1-5 stars based on your interest as an investment category.
          Click a star again to clear it.
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <div className="bg-navy-100 rounded-lg px-3 py-1.5">
              <span className="text-sm font-semibold text-navy-700">
                {ratedCount} / {totalSubsectors} rated
              </span>
            </div>
            <div className="bg-navy-100 rounded-full h-2 w-32">
              <div
                className="bg-gold-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(ratedCount / totalSubsectors) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="text-xs text-navy-600 hover:text-navy-800 underline cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-navy-300">|</span>
            <button
              onClick={collapseAll}
              className="text-xs text-navy-600 hover:text-navy-800 underline cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {subsectorCategories.map(category => (
          <CategorySection
            key={category.id}
            category={category}
            ratings={ratings}
            setRating={setRating}
            isExpanded={expandedCategories.has(category.id)}
            onToggle={() => toggleCategory(category.id)}
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
          Continue to Rankings &rarr;
        </button>
      </div>
    </div>
  );
}
