import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Shows } from './components/Shows';
import { Contact } from './components/Contact';
import { Media } from './components/Media';
import { About } from './components/About';
import { Modal } from './components/Modal';

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  const modalComponents = {
    about: <About />,
    media: <Media />,
    shows: <Shows />,
    contact: <Contact />
  };

  const navItems = ['ABOUT', 'MEDIA', 'SHOWS', 'CONTACT'];

  return (
    <div className={`min-h-screen bg-[#2D2D2D] text-[#F5F5F5] transition-all duration-500 ease-out ${activeModal ? 'scale-105' : ''}`}>
      {/* Hero Section */}
      <div 
        className={`h-screen relative flex items-center justify-center bg-cover bg-center transition-all duration-500 ease-out ${activeModal ? 'blur-md' : ''}`}
        style={{
          backgroundImage: 'url("/images/halfandhalfhero.jpg")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(45, 45, 45, 0.7)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2D2D2D]"></div>

        {/* Hero Content */}
        <div className="z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] via-[#4F8AFF] to-[#FF4F8A] font-blow">
            VaMoose
          </h1>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-0">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => setActiveModal(item.toLowerCase())}
                className={`
                  px-8 py-3 border border-[#F5F5F5] hover:border-[#8A4FFF] 
                  transition-all duration-300 text-lg tracking-wider
                  md:border-r md:border-l
                  md:first:rounded-l-md md:first:border-l
                  md:last:rounded-r-md md:last:border-r
                  ${index === 0 ? 'rounded-t-md md:rounded-t-none' : ''}
                  ${index === navItems.length - 1 ? 'rounded-b-md' : ''}
                  ${index !== 0 && index !== navItems.length - 1 ? 'border-t-0 md:border-t' : ''}
                  hover:bg-[#8A4FFF]/10
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <a href="#" className="hover:text-[#8A4FFF] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      {activeModal && (
        <Modal onClose={closeModal} title={activeModal.toUpperCase()}>
          {modalComponents[activeModal as keyof typeof modalComponents]}
        </Modal>
      )}
    </div>
  );
}

export default App;