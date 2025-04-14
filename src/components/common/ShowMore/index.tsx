"use client";
import React, { useState, useRef, useEffect } from "react";

const ShowMore = ({
  children,
  maxLines = 3,
}: {
  children: React.ReactNode;
  maxLines: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowToggle, setShouldShowToggle] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const hasOverflowingContent =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setShouldShowToggle(hasOverflowingContent);
    }
  }, []);

  return (
    <div>
      <div
        ref={contentRef}
        className={`transition-all duration-300 ${
          isExpanded ? "" : `line-clamp-${maxLines}`
        }`}
      >
        {children}
      </div>

      {shouldShowToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 font-semibold underline hover:underline"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
