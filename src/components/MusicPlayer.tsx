import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={togglePlay}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center 
      p-4 rounded-full shadow-lg cursor-pointer transition-all
      ${
        isPlaying
          ? "bg-tron-blue animate-pulse"
          : "bg-tron-blue hover:scale-105"
      }`}
    >
      <audio ref={audioRef} src="/tron-soundtrack.mp3" loop />
      {isPlaying ? (
        <Pause className="text-black" size={28} />
      ) : (
        <Play className="text-black" size={28} />
      )}
    </div>
  );
};

export default MusicPlayer;
