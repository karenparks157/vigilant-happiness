import { useState, useRef } from 'react';
import { allSubsectors } from '../data/surveyData';
import { labelMap } from './StarRating';

function DraggableItem({ item, index, onDragStart, onDragOver, onDrop, onRemove }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div
      draggable
      onDragStart={(e) => {
        setIsDragging(true);
        onDragStart(e, index);
      }}
      onDragEnd={() => setIsDragging(false)}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
        onDragOver(e, index);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        setIsDragOver(false);
        onDrop(e, index);
      }}
      className={`flex items-center gap-3 p-3 bg-white rounded-lg border-2 transition-all cursor-grab active:cursor-grabbing ${
        isDragging ? 'opacity-40 border-navy-300' : isDragOver ? 'border-gold-400 bg-gold-50' : 'border-navy-200 hover:border-navy-300'
      }`}
    >
      <div className="flex-shrink-0 w-8 h-8 bg-navy-800 text-white rounded-lg flex items-center justify-center font-bold text-sm">
        {index + 1}
      </div>
      <div className="flex-shrink-0">
        <svg className="w-5 h-5 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-navy-100 text-navy-600 px-1.5 py-0.5 rounded">
            {item.code}
          </span>
          <span className="font-medium text-navy-800 truncate">{item.name}</span>
        </div>
        <p className="text-xs text-navy-500 mt-0.5">{item.categoryName}</p>
      </div>
      <button
        onClick={() => onRemove(item.code)}
        className="flex-shrink-0 text-navy-400 hover:text-red-500 transition cursor-pointer"
        title="Remove from Top 10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default function TopTenRanking({ ratings, topTen, setTopTen, onNext, onPrev }) {
  const [searchTerm, setSearchTerm] = useState('');
  const dragItem = useRef(null);

  // Get rated subsectors sorted by rating (descending)
  const ratedSubsectors = allSubsectors
    .filter(s => (ratings[s.code] || 0) > 0)
    .sort((a, b) => (ratings[b.code] || 0) - (ratings[a.code] || 0));

  // Available to add (rated but not in top 10)
  const availableSubsectors = ratedSubsectors.filter(
    s => !topTen.includes(s.code)
  );

  const filteredAvailable = availableSubsectors.filter(s =>
    searchTerm === '' ||
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToTopTen = (code) => {
    if (topTen.length < 10 && !topTen.includes(code)) {
      setTopTen([...topTen, code]);
    }
  };

  const removeFromTopTen = (code) => {
    setTopTen(topTen.filter(c => c !== code));
  };

  const handleDragStart = (e, index) => {
    dragItem.current = index;
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = dragItem.current;
    if (dragIndex === null || dragIndex === dropIndex) return;

    const newTopTen = [...topTen];
    const draggedItem = newTopTen[dragIndex];
    newTopTen.splice(dragIndex, 1);
    newTopTen.splice(dropIndex, 0, draggedItem);
    setTopTen(newTopTen);
    dragItem.current = null;
  };

  const topTenItems = topTen.map(code => allSubsectors.find(s => s.code === code)).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Rank Your Top 10 Subsectors</h2>
        <p className="text-navy-600">
          Select up to 10 subsectors and drag them into your preferred priority order.
          #1 is your highest conviction subsector.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 10 ranking area */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-navy-800">
              Your Top 10 ({topTen.length}/10)
            </h3>
            {topTen.length > 0 && (
              <button
                onClick={() => setTopTen([])}
                className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="space-y-2 min-h-[200px]">
            {topTenItems.map((item, index) => (
              <DraggableItem
                key={item.code}
                item={item}
                index={index}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onRemove={removeFromTopTen}
              />
            ))}
            {topTen.length === 0 && (
              <div className="border-2 border-dashed border-navy-200 rounded-lg p-8 text-center text-navy-400">
                <svg className="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p>Click subsectors from the right to add them here</p>
              </div>
            )}
            {topTen.length > 0 && topTen.length < 10 && (
              <div className="border-2 border-dashed border-navy-200 rounded-lg p-3 text-center text-navy-400 text-sm">
                Add {10 - topTen.length} more subsectors
              </div>
            )}
          </div>
        </div>

        {/* Available subsectors */}
        <div>
          <h3 className="font-semibold text-navy-800 mb-3">
            Available Subsectors ({availableSubsectors.length})
          </h3>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search subsectors..."
            className="w-full px-4 py-2 border border-navy-300 rounded-lg mb-3 focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition text-sm"
          />

          <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredAvailable.map(subsector => (
              <button
                key={subsector.code}
                onClick={() => addToTopTen(subsector.code)}
                disabled={topTen.length >= 10}
                className={`w-full text-left p-3 rounded-lg border transition flex items-center gap-3 ${
                  topTen.length >= 10
                    ? 'border-navy-100 bg-navy-50 text-navy-400 cursor-not-allowed'
                    : 'border-navy-200 hover:border-gold-400 hover:bg-gold-50 cursor-pointer'
                }`}
              >
                <div className="flex-shrink-0 flex items-center gap-1">
                  <span className="text-xs font-mono bg-navy-100 text-navy-600 px-1.5 py-0.5 rounded">
                    {subsector.code}
                  </span>
                  <span className={`text-xs font-semibold ${
                    ratings[subsector.code] === 3 ? 'text-green-600' :
                    ratings[subsector.code] === 2 ? 'text-yellow-600' : 'text-red-500'
                  }`}>
                    {labelMap[ratings[subsector.code]] || ''}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-navy-800 truncate block">{subsector.name}</span>
                  <span className="text-xs text-navy-500">{subsector.categoryName}</span>
                </div>
                <svg className="w-4 h-4 text-navy-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            ))}
            {filteredAvailable.length === 0 && (
              <p className="text-center text-navy-400 py-4 text-sm">
                {ratedSubsectors.length === 0
                  ? 'Rate some subsectors first to add them here'
                  : searchTerm
                  ? 'No matching subsectors found'
                  : 'All rated subsectors are in your Top 10'}
              </p>
            )}
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
          onClick={onNext}
          className="px-8 py-2.5 rounded-lg font-semibold text-white bg-navy-800 hover:bg-navy-900 transition shadow-sm cursor-pointer"
        >
          Continue to Trade-Offs &rarr;
        </button>
      </div>
    </div>
  );
}
