import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for the animation to complete before closing
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      ></div>
      
      <div 
        className={`
          relative bg-[#2D2D2D]/70 w-full max-w-4xl max-h-[90vh] overflow-y-auto 
          rounded-lg shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent 
          [&::-webkit-scrollbar-thumb]:bg-[#8A4FFF] [&::-webkit-scrollbar-thumb]:rounded-full 
          [&::-webkit-scrollbar-thumb]:hover:bg-[#7A3FEF]
          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleClose}
            className="p-2 hover:text-[#8A4FFF] transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl md:text-4xl font-quicksand-light mb-2 uppercase">{title}</h2>
          <div className="w-1/3 h-[1px] bg-gradient-to-r from-[#F5F5F5] to-transparent mb-6"></div>
          {children}
        </div>
      </div>
    </div>
  );
};