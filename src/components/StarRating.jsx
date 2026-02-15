import { useState } from 'react';

export default function StarRating({ value, onChange, size = 'md' }) {
  const [hover, setHover] = useState(0);

  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const labels = ['', 'Not Interested', 'Low Interest', 'Moderate', 'Interested', 'Very Interested'];

  return (
    <div className="star-rating flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star === value ? 0 : star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none"
          title={labels[star]}
        >
          <svg
            className={`${sizeClasses[size]} transition-colors ${
              star <= (hover || value)
                ? 'text-gold-400'
                : 'text-navy-200'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
      {(hover || value) > 0 && (
        <span className="ml-2 text-xs text-navy-500 font-medium">
          {labels[hover || value]}
        </span>
      )}
    </div>
  );
}
