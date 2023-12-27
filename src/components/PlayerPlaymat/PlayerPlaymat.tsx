import clsx from 'clsx';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';

interface GridFromTo {
  from: number;
  to: number;
}

interface Props {
  rowFromTo?: GridFromTo;
  colFromTo?: GridFromTo;
  rowSpan: number;
  colSpan: number;
  background?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}

const PlayerPlaymat = ({
  rowFromTo,
  colFromTo,
  rowSpan,
  colSpan,
  background,
  children,
  style,
}: Props) => {
  const calculateGridRow = () => {
    if(!rowFromTo) return ''
    return `${rowFromTo.from} / span ${rowFromTo.to}`
  }
  const calculateGridColumn = () => {
    if(!colFromTo) return ''
    return `${colFromTo.from} / span ${colFromTo.to}`
  }
  const playmatRef = useRef<HTMLDivElement>(null);
    const [playmatHeight, setPlaymatHeight] = useState(0);

  useEffect(() => {
    if (playmatRef.current) {
      setPlaymatHeight(playmatRef.current.offsetHeight);
    }
  }, []);
  return (
    <div 
      ref={playmatRef}
      style={{ 
        backgroundColor: background, 
        gridRow: `${calculateGridRow()}`, 
        gridColumn: `${calculateGridColumn()}`,
        ...style
      }} 
      className={clsx(
        `w-full h-full rounded-md relative grid items-stretch justify-items-stretch`,
        `grid-rows-${rowSpan} grid-cols-${colSpan}`,
      )}
    >
    {React.isValidElement(children) && React.cloneElement(children as React.ReactElement<{ playmatHeight?: number }>, { playmatHeight })}   
  </div>
  );
}

export default PlayerPlaymat;