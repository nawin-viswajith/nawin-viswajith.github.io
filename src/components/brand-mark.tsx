export function BrandMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 46 L18 18 L46 46 L46 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
