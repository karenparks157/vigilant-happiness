export default function ChargerLogo({ className = '', size = 'md', variant = 'full' }) {
  const sizes = {
    sm: { icon: 28, text: 'text-sm' },
    md: { icon: 36, text: 'text-lg' },
    lg: { icon: 48, text: 'text-2xl' },
    xl: { icon: 64, text: 'text-3xl' },
  };

  const { icon, text } = sizes[size] || sizes.md;

  // Charging horse icon
  const HorseIcon = () => (
    <svg
      width={icon}
      height={icon}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <rect width="64" height="64" rx="12" fill="currentColor" className="text-navy-900" />
      <g transform="translate(8, 6) scale(0.75)">
        {/* Horse silhouette */}
        <path
          d="M52 14c-2-3-5-4-8-4-1 0-2 0-3 1l-3 2c-2 1-4 1-5 0l-2-3c-1-2-3-3-5-3-3 0-5 2-6 4l-2 5c-1 3-3 5-6 6l-3 1c-2 1-3 3-3 5v4c0 3 1 5 3 7l4 4c1 2 2 4 2 6v8c0 2 1 3 3 3h4c2 0 3-1 3-3v-6l2-4 6 2v8c0 2 1 3 3 3h4c2 0 3-1 3-3v-10c0-2 1-4 2-6l3-5c2-3 2-6 2-9v-8c0-3-1-5-3-7l-4-4z"
          fill="currentColor"
          className="text-gold-400"
        />
        {/* Eye detail */}
        <circle cx="40" cy="18" r="2" fill="currentColor" className="text-navy-900" />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={className}>
        <HorseIcon />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <HorseIcon />
      <div className="flex flex-col leading-tight">
        <span className={`font-bold tracking-tight text-navy-900 ${text}`}>
          CHARGER
        </span>
        <span className="text-[0.6em] font-medium tracking-widest uppercase text-navy-500">
          Investment Partners
        </span>
      </div>
    </div>
  );
}
