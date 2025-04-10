import React from 'react';

export const Media: React.FC = () => {
  const photos = [
    '/images/posters/the_virginian_2.jpg',
    '/images/posters/the_million_dollar_cowboy_bar.png',
    '/images/posters/the_virginian_3.png',
    '/images/posters/the_silver_dollar_bar_2.png',
    '/images/posters/snowking_night-skiing.png',
    '/images/posters/the_tetonia_club_nye.jpg',
    '/images/posters/the_silver_dollar_bar.jpg',
    '/images/posters/the_tetonia_club.jpg',
    '/images/posters/the_virginian.png',
    '/images/posters/guidepost.jpg',
    '/images/posters/midnight_lunch.png'
  ];

  return (
    <section id="media" className="py-20">
      <div className="max-w-6xl mx-auto">
        

        {/* Music Players */}
        <div className="mb-16">
          <h3 className="text-2xl font-quicksand-light mb-6">Latest Release</h3>
          <div className="bg-[#1D1D1D] p-6 rounded-lg">
            <div className="aspect-video w-full bg-[#2D2D2D] rounded flex items-center justify-center">
              <p className="text-lg opacity-50">Music Player Embed</p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-quicksand-light mb-6">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  src={photo}
                  alt={`Poster ${index + 1}`}
                  className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div>
          <h3 className="text-2xl font-quicksand-light mb-6">Videos</h3>
          <div className="aspect-video w-full bg-[#1D1D1D] rounded-lg flex items-center justify-center">
            <p className="text-lg opacity-50">YouTube Video Embed</p>
          </div>
        </div>
      </div>
    </section>
  );
};