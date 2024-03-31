export function highlightText(text: string, keyword: string) {
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return (
    <>
      {parts.map((part, i) => {
        const isHighlight = i % 2;
        if (isHighlight)
          return (
            <span key={i} className="bg-yellow-400">
              {part}
            </span>
          );
        else return part;
      })}
    </>
  );
}
