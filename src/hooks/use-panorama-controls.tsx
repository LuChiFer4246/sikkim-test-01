import { useState, useEffect, useCallback } from 'react';

export interface PanoramaControls {
  currentRotation: number;
  isRotating: boolean;
  setCurrentRotation: (rotation: number) => void;
  setIsRotating: (isRotating: boolean) => void;
  resetView: () => void;
}

export const usePanoramaControls = (): PanoramaControls => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const resetView = useCallback(() => {
    setCurrentRotation(0);
    setIsRotating(false);
  }, []);

  // Normalize rotation to prevent infinite values
  const setRotationNormalized = useCallback((rotation: number) => {
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    setCurrentRotation(normalizedRotation);
  }, []);

  return {
    currentRotation,
    isRotating,
    setCurrentRotation: setRotationNormalized,
    setIsRotating,
    resetView,
  };
};