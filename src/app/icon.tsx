import { ImageResponse } from 'next/og';
 
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          color: '#D4A44A',
          fontSize: '34px',
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        F
      </div>
    ),
    { ...size }
  );
}
