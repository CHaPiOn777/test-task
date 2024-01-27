'use client';

import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return width;
}

export default useWindowWidth;
