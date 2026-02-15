export default function ProgressBar({ sections, currentSection, onNavigate }) {
  return (
    <div className="bg-white border-b border-navy-200 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-navy-600">
            Section {currentSection + 1} of {sections.length}
          </span>
          <span className="text-sm font-semibold text-navy-800">
            {sections[currentSection]}
          </span>
        </div>
        <div className="flex gap-1">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              title={section}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                idx < currentSection
                  ? 'bg-navy-700'
                  : idx === currentSection
                  ? 'bg-gold-500'
                  : 'bg-navy-200'
              } ${idx <= currentSection ? 'cursor-pointer hover:opacity-80' : 'cursor-not-allowed'}`}
              disabled={idx > currentSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
