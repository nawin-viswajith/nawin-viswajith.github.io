import { Fragment, ReactNode } from "react";

const NUMBER_PATTERN = /(?<![a-zA-Z])\$?\d[\d,.]*\d(?:\+|%)?|(?<![a-zA-Z])\$?\d(?:\+|%)?/g;

export function highlightNumbers(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(NUMBER_PATTERN)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, start)}</Fragment>);
    }
    nodes.push(
      <strong key={key++} className="font-semibold text-foreground">
        {match[0]}
      </strong>
    );
    lastIndex = start + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return nodes;
}
