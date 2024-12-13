'use client';

import { useEffect, useState } from 'react';

export const ChristmasLights = () => {
  const [frame, setFrame] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(prev => (prev + 1) % 2);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 pb-2 pointer-events-none max-w-[620px] mx-auto">
      <div className="flex justify-between px-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: frame === (i % 2) ? 
                i % 3 === 0 ? '#ff0000' : 
                i % 3 === 1 ? '#00ff00' : 
                '#ffff00' : '#333',
              boxShadow: frame === (i % 2) ?
                `0 0 8px 2px ${i % 3 === 0 ? '#ff0000' : i % 3 === 1 ? '#00ff00' : '#ffff00'}` :
                'none',
              transform: 'translateY(-50%)'
            }}
          />
        ))}
      </div>
      <div 
        className="w-full h-[2px]" 
        style={{
          background: 'linear-gradient(90deg, #00 50%, transparent 50%)',
          backgroundSize: '8px 100%'
        }}
      />
    </div>
  );
};
