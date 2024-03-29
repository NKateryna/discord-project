export function StatusInvisibleIcon({ className, style }) {
  return (
    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" rx="5" fill="#747F8D" />
      <rect
        style={style}
        className={className}
        x="2"
        y="2"
        width="6"
        height="6"
        rx="3"
        fill="#2F3136"
      />
    </svg>
  );
}
