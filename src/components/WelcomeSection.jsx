import ChargerLogo from './ChargerLogo';

export default function WelcomeSection({ respondent, setRespondent, onNext }) {
  const isValid = respondent.name.trim();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="flex justify-center mb-6">
          <ChargerLogo size="xl" />
        </div>
        <h1 className="text-3xl font-bold text-navy-900 mb-3">
          Consumer Subsector Prioritization Survey
        </h1>
        <p className="text-navy-600 text-lg leading-relaxed max-w-xl mx-auto">
          Help shape our firm's consumer investment strategy by rating subsectors,
          evaluating trade-offs, and sharing your conviction on where we should focus.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-8">
        <h2 className="text-lg font-semibold text-navy-800 mb-6">Before we begin</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={respondent.name}
              onChange={e => setRespondent({ ...respondent, name: e.target.value })}
              placeholder="e.g., John Smith"
              className="w-full px-4 py-2.5 border border-navy-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition"
            />
          </div>

        </div>

        <div className="mt-8 p-4 bg-navy-50 rounded-lg border border-navy-200">
          <h3 className="text-sm font-semibold text-navy-700 mb-2">What to expect:</h3>
          <ul className="text-sm text-navy-600 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">1.</span>
              Rate ~80 consumer subsectors across 12 categories
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">2.</span>
              Rank your Top 10 subsectors in priority order
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">3.</span>
              Evaluate 4 trade-off deal scenarios
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">4.</span>
              Answer conviction and strategy questions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">5.</span>
              Share open-ended strategic observations
            </li>
          </ul>
          <p className="text-xs text-navy-500 mt-3">
            Your progress is automatically saved. You can return and continue at any time.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-lg font-semibold text-white transition shadow-sm ${
            isValid
              ? 'bg-navy-800 hover:bg-navy-900 cursor-pointer'
              : 'bg-navy-300 cursor-not-allowed'
          }`}
        >
          Begin Survey &rarr;
        </button>
      </div>
    </div>
  );
}
