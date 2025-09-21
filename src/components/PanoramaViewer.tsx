import React, { useRef, useEffect, useState } from 'react';

interface PanoramaViewerProps {
  image: string;
  rotation: number;
  onRotationChange: (rotation: number) => void;
  isRotating: boolean;
  onRotatingChange: (isRotating: boolean) => void;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({
  image,
  rotation,
  onRotationChange,
  isRotating,
  onRotatingChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [verticalRotation, setVerticalRotation] = useState(0);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    onRotatingChange(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isRotating) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    // Horizontal rotation (yaw)
    onRotationChange(rotation + deltaX * 0.5);
    
    // Vertical rotation (pitch) - limited range
    setVerticalRotation(prev => {
      const newRotation = prev - deltaY * 0.3;
      return Math.max(-60, Math.min(60, newRotation));
    });

    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    onRotatingChange(false);
  };

  // Keyboard controls for panorama
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target !== document.body && !(e.target as HTMLElement)?.closest('[data-panorama]')) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setVerticalRotation(prev => Math.max(-60, prev - 5));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setVerticalRotation(prev => Math.min(60, prev + 5));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      data-panorama
      style={{ perspective: '1000px' }}
    >
      {/* Panoramic Sphere Container */}
      <div
        className="absolute inset-0"
        style={{
          transform: `rotateY(${-rotation}deg) rotateX(${verticalRotation}deg)`,
          transformStyle: 'preserve-3d',
          transition: isRotating ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: '400% 100%',
            backgroundPosition: '0% 50%',
            backgroundRepeat: 'no-repeat',
            transform: 'translateZ(300px) rotateY(0deg)',
          }}
        />
        
        {/* Right Face */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: '400% 100%',
            backgroundPosition: '25% 50%',
            backgroundRepeat: 'no-repeat',
            transform: 'translateZ(300px) rotateY(90deg)',
          }}
        />
        
        {/* Back Face */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: '400% 100%',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            transform: 'translateZ(300px) rotateY(180deg)',
          }}
        />
        
        {/* Left Face */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: '400% 100%',
            backgroundPosition: '75% 50%',
            backgroundRepeat: 'no-repeat',
            transform: 'translateZ(300px) rotateY(270deg)',
          }}
        />
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2">
        <div className="flex items-center gap-2 text-white text-xs">
          <span>🔄 Drag to look around</span>
        </div>
      </div>

      {/* Center Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4 h-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default PanoramaViewer;