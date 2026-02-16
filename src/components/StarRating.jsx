const levels = [
  { value: 3, label: 'High', color: 'bg-green-100 text-green-700 border-green-300', active: 'bg-green-600 text-white border-green-600' },
  { value: 2, label: 'Medium', color: 'bg-yellow-100 text-yellow-700 border-yellow-300', active: 'bg-yellow-500 text-white border-yellow-500' },
  { value: 1, label: 'Low', color: 'bg-red-100 text-red-700 border-red-300', active: 'bg-red-500 text-white border-red-500' },
];

const labelMap = { 3: 'High', 2: 'Medium', 1: 'Low' };

export { labelMap };

export default function StarRating({ value, onChange }) {
  return (
    <div className="flex items-center gap-1.5">
      {levels.map(level => (
        <button
          key={level.value}
          type="button"
          onClick={() => onChange(level.value === value ? 0 : level.value)}
          className={`px-3 py-1 text-xs font-semibold rounded-full border transition cursor-pointer ${
            value === level.value ? level.active : level.color
          }`}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
}
