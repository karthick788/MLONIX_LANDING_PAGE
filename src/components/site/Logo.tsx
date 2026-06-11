export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="./"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 7c3.8 4.6 6 8 6 11.2A6 6 0 0 1 10 18.2C10 15 12.2 11.6 16 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
