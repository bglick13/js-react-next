"use client";
import React from "react";
interface Props {
  slideNumber: number;
  totalSlides: number;
}

export function SlideFooter({ slideNumber, totalSlides }: Props) {
  // render slide number in the bottom right
  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        if (slideNumber === totalSlides) {
          return;
        }
        window.location.href = `/slides/${slideNumber + 1}`;
      }
      if (e.key === "ArrowLeft") {
        if (slideNumber === 1) {
          return;
        }
        window.location.href = `/slides/${slideNumber - 1}`;
      }
    });
    return () => {
      document.removeEventListener("keydown", () => {});
    };
  });
  return (
    <div className="absolute bottom-0 right-0 p-4 text-slate-200 text-opacity-50">
      <span className="font-bold">{slideNumber}</span> / {totalSlides}
    </div>
  );
}
