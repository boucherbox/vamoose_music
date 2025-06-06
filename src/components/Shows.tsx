import React from 'react';

export const Shows: React.FC = () => {
  const shows = [
    {
      date: 'Jun 6, 2025',
      venue: 'The Tetonia Club',
      city: 'Tetonia, ID',
    },
    {
      date: 'Jun 14, 2025',
      venue: 'JHMR Gondi Stage',
      city: 'Teton Village, WY',
    },
    {
      date: 'Jul 11, 2025',
      venue: 'The Virginian',
      city: 'Jackson, WY',
    },
    {
      date: 'Aug 3, 2025',
      venue: 'Concert on the Commons',
      city: 'Teton Village, WY',
    },
  ];

  return (
    <section id="shows" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-[#1D1D1D] rounded-lg p-6"
            >
              <div>
                <p className="text-lg font-semibold mb-1">{show.date}</p>
                <p className="text-xl mb-1">{show.venue}</p>
                <p className="opacity-75">{show.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};