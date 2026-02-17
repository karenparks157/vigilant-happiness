export default function ChargerLogo({ className = '', size = 'md', variant = 'full' }) {
  const sizes = {
    sm: { height: 32 },
    md: { height: 44 },
    lg: { height: 56 },
    xl: { height: 72 },
  };

  const { height } = sizes[size] || sizes.md;
  // The SVG viewBox aspect ratio is roughly 300:60
  const width = Math.round(height * (300 / 60));

  if (variant === 'icon') {
    return (
      <div className={className}>
        <svg
          width={height}
          height={height}
          viewBox="0 0 70 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          {/* Gold outer swoosh */}
          <path
            d="M8 52 C-4 36, -2 14, 16 4 C28 -3, 44 -2, 56 6"
            stroke="#D4922E"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Navy inner swoosh */}
          <path
            d="M18 48 C6 36, 8 18, 22 10 C32 4, 46 6, 54 14"
            stroke="#102a43"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 300 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Gold outer swoosh */}
        <path
          d="M8 52 C-4 36, -2 14, 16 4 C28 -3, 44 -2, 56 6"
          stroke="#D4922E"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Navy inner swoosh */}
        <path
          d="M18 48 C6 36, 8 18, 22 10 C32 4, 46 6, 54 14"
          stroke="#102a43"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* CHARGER text */}
        <text
          x="72"
          y="30"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="28"
          fontWeight="700"
          letterSpacing="2"
          fill="#102a43"
        >
          CHARGER
        </text>
        {/* INVESTMENT PARTNERS text */}
        <text
          x="72"
          y="50"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fontWeight="500"
          letterSpacing="3.5"
          fill="#102a43"
        >
          INVESTMENT PARTNERS
        </text>
      </svg>
    </div>
  );
}
