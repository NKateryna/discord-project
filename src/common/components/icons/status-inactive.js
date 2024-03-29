export function StatusInactiveIcon({ className, style }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="10" height="10" rx="5" fill="#FAA81A" />
      <circle
        className={className}
        style={style}
        cx="3"
        cy="3"
        r="3"
        fill="#292B2F"
      />
    </svg>
  );
}
