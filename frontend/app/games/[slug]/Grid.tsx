"use client";

import React, { useState, useRef, WheelEvent, MouseEvent } from "react";

interface GridComponentProps {}

export const GridComponent: React.FC<GridComponentProps> = () => {
  const gridContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(0.7);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setZoomLevel((prevZoom) =>
      Math.min(Math.max(1 + event.deltaY * -0.01, 0.6), 3)
    );
    if (gridContainerRef.current) {
      gridContainerRef.current.style.transform = `scale(${zoomLevel})`;
    }
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.button === 2) {
      setIsDragging(true);
      setStartX(event.pageX - (gridContainerRef.current?.offsetLeft || 0));
      setStartY(event.pageY - (gridContainerRef.current?.offsetTop || 0));
      setScrollLeft(gridContainerRef.current?.scrollLeft || 0);
      setScrollTop(gridContainerRef.current?.scrollTop || 0);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (isDragging && gridContainerRef.current) {
      const x = event.pageX - gridContainerRef.current.offsetLeft;
      const y = event.pageY - gridContainerRef.current.offsetTop;
      const moveX = x - startX;
      const moveY = y - startY;
      gridContainerRef.current.scrollLeft = scrollLeft - moveX;
      gridContainerRef.current.scrollTop = scrollTop - moveY;
    }
  };

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const gridWrapper = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  const gridContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(50, 40px)",
    gridTemplateRows: "repeat(50, 40px)",
    transition: "transform 0.3s",
    transform: `scale(${zoomLevel})`,
    overflow: "hidden",
  };

  const gridItemStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    backgroundColor: "black",
    border: "1px solid #393939",
    transition: "background-color 0.3s",
  };

  const renderGridItems = () => {
    const gridItems: JSX.Element[] = [];
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        gridItems.push(<div key={`${i}-${j}`} style={gridItemStyle}></div>);
      }
    }
    return gridItems;
  };

  return (
    <div className="wrapper" style={gridWrapper}>
      <div
        id="grid-container"
        ref={gridContainerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onContextMenu={handleContextMenu}
        style={gridContainerStyle}
      >
        {renderGridItems()}
      </div>
    </div>
  );
};
