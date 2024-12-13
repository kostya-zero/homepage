'use client';

import dynamic from 'next/dynamic';

// Dynamically import Snowfall with no SSR
const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

export const SnowfallEffect = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 50 }}>
      <Snowfall 
        color="#fff"
        snowflakeCount={200}
        radius={[0.3, 1.5]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
};
