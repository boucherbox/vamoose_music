import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full max-w-4xl px-8">
        <div className="aspect-[3/1] overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/band.jpg" 
            alt="VaMoose Band" 
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl px-8 text-center space-y-4">
        <p className="font-quicksand-light text-lg leading-relaxed">
          VaMoose is a high-energy live performance band that brings the party wherever they go. 
          With a dynamic mix of rock, pop, and dance hits, they create an unforgettable experience 
          that gets everyone on their feet.
        </p>
        <p className="font-quicksand-light text-lg leading-relaxed">
          Known for their electrifying stage presence and crowd interaction, VaMoose has become 
          a favorite at venues and events across the region. Their ability to read the crowd and 
          keep the energy high makes every show unique and memorable.
        </p>
        <p className="font-quicksand-light text-lg leading-relaxed">
          Whether it's a private event, corporate function, or public venue, VaMoose delivers 
          a professional, high-quality performance that leaves audiences wanting more.
        </p>
      </div>
    </div>
  );
};