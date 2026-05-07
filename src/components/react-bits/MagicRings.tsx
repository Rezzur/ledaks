type MagicRingsProps = {
  className?: string;
};

export function MagicRings({ className = "" }: MagicRingsProps) {
  return (
    <div className={`magic-rings ${className}`.trim()} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
