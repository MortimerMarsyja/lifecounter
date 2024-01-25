import React, { CSSProperties, useEffect, useRef, useState } from "react";

interface GridFromTo {
  from: number;
  to: number;
}

interface PlayerPlaymat {
  background?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  withRefData?: (refData: React.RefObject<HTMLDivElement>) => void;
}

interface PlayerPlaymatWithFromTo extends PlayerPlaymat {
  rowFromTo: GridFromTo;
  colFromTo: GridFromTo;
}

interface PlayerPlaymatWithSpan extends PlayerPlaymat {
  rowSpan?: number;
  colSpan?: number;
}

const PlayerPlaymat = (
  props: PlayerPlaymatWithFromTo | PlayerPlaymatWithSpan
) => {
  const { background, children, style, withRefData } = props;
  const { rowFromTo, colFromTo } = props as PlayerPlaymatWithFromTo;
  const { rowSpan, colSpan } = props as PlayerPlaymatWithSpan;
  const calculateColumnSpan = colSpan
    ? `span ${colSpan}`
    : `${colFromTo?.from} / ${colFromTo?.to}`;
  const calculateRowSpan = rowSpan
    ? `span ${rowSpan}`
    : `${rowFromTo?.from} / ${rowFromTo?.to}`;
  const playmatRef = useRef<HTMLDivElement>(null);
  const [playmatHeight, setPlaymatHeight] = useState(0);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === playmatRef.current) {
          setPlaymatHeight(entry.contentRect.height);
          if (withRefData) withRefData(playmatRef);
        }
      }
    });

    if (playmatRef.current) {
      observer.observe(playmatRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [withRefData]);

  return (
    <div
      ref={playmatRef}
      style={{
        backgroundColor: background,
        gridRow: `${calculateRowSpan}`,
        gridColumn: `${calculateColumnSpan}`,
        ...style,
      }}
      className="grid w-full h-full rounded-md relative items-stretch justify-items-stretch"
    >
      {React.isValidElement(children) &&
        React.cloneElement(
          children as React.ReactElement<{ playmatHeight?: number }>,
          { playmatHeight }
        )}
    </div>
  );
};

export default PlayerPlaymat;
