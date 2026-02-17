export default function SubmittedScreen({ respondent }) {
  return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-navy-900 mb-3">Thank You, {respondent.name}!</h1>
      <p className="text-navy-600 text-lg mb-8">
        Your responses have been successfully recorded. Your input is invaluable
        in shaping our consumer investment strategy.
      </p>
      <div className="bg-white rounded-xl shadow-sm border border-navy-200 p-6 text-left">
        <h3 className="font-semibold text-navy-800 mb-2">What happens next?</h3>
        <ul className="text-sm text-navy-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-gold-500 mt-0.5 flex-shrink-0">1.</span>
            All partner responses will be aggregated and analyzed
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold-500 mt-0.5 flex-shrink-0">2.</span>
            A consensus heatmap will identify highest-conviction subsectors
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold-500 mt-0.5 flex-shrink-0">3.</span>
            Results will be presented at the next investment committee meeting
          </li>
        </ul>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-8 px-6 py-2.5 rounded-lg font-medium text-navy-600 border border-navy-300 hover:bg-navy-100 transition cursor-pointer"
      >
        Submit Another Response
      </button>
    </div>
  );
}
