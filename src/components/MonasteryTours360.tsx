import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import { TextureLoader, BackSide, MeshBasicMaterial } from 'three';

extend({ MeshBasicMaterial });
import { Play, Pause, Volume2, VolumeX, RotateCcw, ChevronLeft, ChevronRight, Accessibility } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MonasteryTour {
  id: string;
  name: string;
  description: string;
  image: string;
  audioUrl?: string;
  transcript: string;
  audioDescription: string;
  keyboardControls: string;
}

const monasteryTours: MonasteryTour[] = [
  {
    id: 'rumtek',
    name: 'Rumtek Monastery',
    description: 'The Golden Temple of Sikkim - Seat of Kagyu Buddhism',
    image: '/lovable-uploads/2bbf5848-053c-4f28-96bc-dac23d6a8b34.png',
    transcript: `Welcome to Rumtek Monastery, also known as the Golden Temple of Sikkim. This magnificent monastery is the largest in Sikkim and serves as the seat of the Kagyu lineage of Tibetan Buddhism. Built in the 1960s, it houses precious relics, thangkas, and scriptures. The monastery's golden stupa and intricate architecture reflect traditional Tibetan craftsmanship.`,
    audioDescription: `You are now viewing a 360-degree panorama of Rumtek Monastery. The main temple structure dominates the center with its distinctive golden roof and traditional Tibetan architecture. Prayer flags flutter in the mountain breeze, and you can see the surrounding hills of Sikkim in the distance.`,
    keyboardControls: 'Use arrow keys to look around, Space to pause audio, A for audio description, T for transcript'
  },
  {
    id: 'pemayangtse',
    name: 'Pemayangtse Monastery',
    description: 'Perfect Sublime Lotus - Second oldest monastery in Sikkim',
    image: '/lovable-uploads/849faf99-8ef2-4028-bb7f-9b1fd88877ee.png',
    transcript: `Pemayangtse Monastery, meaning 'Perfect Sublime Lotus', is the second oldest monastery in Sikkim. Founded in 1705, it offers breathtaking views of the Himalayas including Mount Kanchenjunga. The monastery is known for its ancient murals, sculptures, and the famous seven-tiered wooden sculpture depicting heaven and hell.`,
    audioDescription: `This panoramic view shows Pemayangtse Monastery perched on a hilltop. The white-washed walls contrast beautifully with the red roofs. Behind the monastery, the snow-capped peaks of the Himalayas create a stunning backdrop.`,
    keyboardControls: 'Arrow keys for navigation, Space for audio control, A for descriptions, T for transcript'
  },
  {
    id: 'enchey',
    name: 'Enchey Monastery',
    description: 'The Solitary Temple blessed by Lama Druptob Karpo',
    image: '/lovable-uploads/fa6d6df3-ea4b-4f3f-9db1-81fbb2370f9f.png',
    transcript: `Enchey Monastery, meaning 'The Solitary Temple', was blessed by Lama Druptob Karpo who could fly. Built in 1840, this monastery is famous for its annual Cham dance during the Tibetan New Year. The monastery houses images of gods, goddesses, and other religious artifacts.`,
    audioDescription: `The 360-degree view reveals Enchey Monastery nestled among pine trees. The monastery's colorful facade and traditional architecture stand out against the green forest backdrop. Prayer wheels and sacred symbols adorn the entrance.`,
    keyboardControls: 'Navigate with arrow keys, Space to toggle audio, A for audio descriptions, T for transcripts'
  }
];

const PanoramaSphere: React.FC<{ image: string }> = ({ image }) => {
  const meshRef = useRef<any>();
  const texture = useLoader(TextureLoader, image);
  const material = useMemo(() => new MeshBasicMaterial({ map: texture, side: BackSide }), [texture]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  console.log('Texture loaded:', texture);
  console.log('Image URL:', image);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[10, 32, 32]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const MonasteryTours360: React.FC = () => {
  const [currentTour, setCurrentTour] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showAudioDescription, setShowAudioDescription] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tour = monasteryTours[currentTour];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentTour((prev) => (prev - 1 + monasteryTours.length) % monasteryTours.length);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentTour((prev) => (prev + 1) % monasteryTours.length);
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 't':
        case 'T':
          e.preventDefault();
          setShowTranscript(!showTranscript);
          break;
        case 'a':
        case 'A':
          e.preventDefault();
          setShowAudioDescription(!showAudioDescription);
          break;
        case 'c':
        case 'C':
          e.preventDefault();
          setShowControls(!showControls);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, showTranscript, showAudioDescription, showControls]);

  const nextTour = () => {
    setCurrentTour((prev) => (prev + 1) % monasteryTours.length);
  };

  const prevTour = () => {
    setCurrentTour((prev) => (prev - 1 + monasteryTours.length) % monasteryTours.length);
  };

  const resetView = () => {
    // Reset camera position logic would go here
    setIsPlaying(false);
  };

  return (
    <section className="py-16 bg-black relative overflow-hidden" id="monastery-tours">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-400 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-orange-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-orange-600 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-orange-500">
            360° Monastery Virtual Tours
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-4">
            Immerse yourself in the sacred spaces of Sikkim's ancient monasteries. Navigate with keyboard, listen to audio descriptions, and read transcripts for a fully accessible experience.
          </p>
          <div className="text-sm text-orange-300">
            <p>Keyboard: ← → (navigate) | Space (play/pause) | T (transcript) | A (audio description) | C (controls)</p>
          </div>
        </motion.div>

        <div className="relative">
          {/* 360 Tour Container */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border-2 border-orange-500/30 bg-gray-900">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <PanoramaSphere image={tour.image} />
            </Canvas>

            {/* Tour Navigation */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none"
                >
                  <button
                    onClick={prevTour}
                    className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all pointer-events-auto"
                    aria-label="Previous monastery tour"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextTour}
                    className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all pointer-events-auto"
                    aria-label="Next monastery tour"
                  >
                    <ChevronRight size={24} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tour Info Overlay */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 max-w-sm">
              <h3 className="text-xl font-display font-bold text-orange-500 mb-2">{tour.name}</h3>
              <p className="text-white text-sm">{tour.description}</p>
            </div>

            {/* Control Panel */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-black/70 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-orange-500 transition-colors"
                      aria-label={isPlaying ? "Pause audio" : "Play audio"}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-orange-500 transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <button
                      onClick={resetView}
                      className="text-white hover:text-orange-500 transition-colors"
                      aria-label="Reset view"
                    >
                      <RotateCcw size={20} />
                    </button>
                    <button
                      onClick={() => setShowAudioDescription(!showAudioDescription)}
                      className={cn("transition-colors", showAudioDescription ? "text-orange-500" : "text-white hover:text-orange-500")}
                      aria-label="Toggle audio description"
                    >
                      <Accessibility size={20} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tour Selector */}
          <div className="flex justify-center mt-6 gap-2">
            {monasteryTours.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTour(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  currentTour === index 
                    ? 'bg-orange-500 scale-150' 
                    : 'bg-white/50 hover:bg-white/80 hover:scale-125'
                )}
                aria-label={`Tour ${index + 1}: ${monasteryTours[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Transcript */}
          <AnimatePresence>
            {showTranscript && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30"
              >
                <h4 className="text-lg font-semibold text-orange-500 mb-3 flex items-center gap-2">
                  <span>📖</span> Transcript
                </h4>
                <p className="text-white text-sm leading-relaxed">{tour.transcript}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Audio Description */}
          <AnimatePresence>
            {showAudioDescription && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30"
              >
                <h4 className="text-lg font-semibold text-orange-500 mb-3 flex items-center gap-2">
                  <Accessibility size={20} /> Audio Description
                </h4>
                <p className="text-white text-sm leading-relaxed">{tour.audioDescription}</p>
                <div className="mt-3 text-xs text-orange-300">
                  <p><strong>Controls:</strong> {tour.keyboardControls}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Access Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className={cn(
              "px-4 py-2 rounded-lg border transition-all",
              showTranscript 
                ? "bg-orange-500 text-white border-orange-500" 
                : "bg-transparent text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
            )}
          >
            {showTranscript ? 'Hide' : 'Show'} Transcript
          </button>
          <button
            onClick={() => setShowAudioDescription(!showAudioDescription)}
            className={cn(
              "px-4 py-2 rounded-lg border transition-all flex items-center gap-2",
              showAudioDescription 
                ? "bg-orange-500 text-white border-orange-500" 
                : "bg-transparent text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
            )}
          >
            <Accessibility size={16} />
            {showAudioDescription ? 'Hide' : 'Show'} Audio Description
          </button>
        </div>
      </div>

      {/* Hidden audio element for future audio implementation */}
      <audio ref={audioRef} muted={isMuted} />
    </section>
  );
};

export default MonasteryTours360;