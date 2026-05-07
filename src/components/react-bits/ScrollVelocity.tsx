type ScrollVelocityProps = {
  items: string[];
  label: string;
  reverse?: boolean;
};

export function ScrollVelocity({ items, label, reverse = false }: ScrollVelocityProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="scroll-velocity" aria-label={label}>
      <div className={reverse ? "scroll-velocity-track is-reverse" : "scroll-velocity-track"}>
        {repeatedItems.map((item, index) => (
          <span aria-hidden={index >= items.length} key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
