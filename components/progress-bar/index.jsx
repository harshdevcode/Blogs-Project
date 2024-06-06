import React, { useState, useEffect, useRef } from 'react';

const ReadingProgressBar = ({ contentRef }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  // const progressBarRef = useRef(null);

  useEffect(() => {
    const calculateReadingProgress = () => {
      const contentHeight = contentRef.current?.offsetHeight;
      const scrollPosition = window.scrollY;

      const newReadingProgress = Math.min(
        (scrollPosition / contentHeight) * 100,
        100
      );

      setReadingProgress(newReadingProgress);
    };

    // Initial setup
    calculateReadingProgress();

    // Scroll listener
    const scrollListener = () => {
      calculateReadingProgress();
    };

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, [contentRef]);

  return (
    <div
      // ref={progressBarRef}
      style={{ width: `${readingProgress}%`, height:'4px', backgroundColor:'#f05238', position:'fixed' , zIndex: '1' }}
    />
  );
};

export default ReadingProgressBar;
