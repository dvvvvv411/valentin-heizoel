import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 min-w-[40px] md:min-w-[50px]">
      <span className="text-lg md:text-2xl font-bold tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-[10px] md:text-xs mt-1 opacity-90">{label}</span>
  </div>
);

const NewYearBanner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if user has closed the banner before
    const bannerClosed = localStorage.getItem('newYearBannerClosed');
    if (bannerClosed === 'true') {
      setIsVisible(false);
    }

    const targetDate = new Date('2025-01-31T23:59:59');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newYearBannerClosed', 'true');
  };

  if (!isVisible || isExpired) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white py-3 px-4 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIgY3g9IjIwIiBjeT0iMjAiIHI9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <Gift className="w-6 h-6 animate-bounce" />
            <span className="font-bold text-lg tracking-wide">🎉 NEUJAHRS-RABATT AKTION!</span>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-sm mr-2">Endet in:</span>
            <TimeBox value={timeLeft.days} label="Tage" />
            <span className="text-2xl font-bold mx-1">:</span>
            <TimeBox value={timeLeft.hours} label="Std" />
            <span className="text-2xl font-bold mx-1">:</span>
            <TimeBox value={timeLeft.minutes} label="Min" />
            <span className="text-2xl font-bold mx-1">:</span>
            <TimeBox value={timeLeft.seconds} label="Sek" />
          </div>
          
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            Gültig bis 31.01.2025
          </span>
          
          <button 
            onClick={handleClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Banner schließen"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 animate-bounce" />
              <span className="font-bold text-sm">🎉 NEUJAHRS-RABATT!</span>
            </div>
            <button 
              onClick={handleClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Banner schließen"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="flex items-center gap-1">
            <TimeBox value={timeLeft.days} label="Tage" />
            <span className="text-lg font-bold">:</span>
            <TimeBox value={timeLeft.hours} label="Std" />
            <span className="text-lg font-bold">:</span>
            <TimeBox value={timeLeft.minutes} label="Min" />
            <span className="text-lg font-bold">:</span>
            <TimeBox value={timeLeft.seconds} label="Sek" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearBanner;
