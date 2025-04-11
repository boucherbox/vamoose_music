import React from 'react';

export const Shows: React.FC = () => {
  const shows = [
    {
      date: 'Mar 15, 2025',
      venue: 'The Echo Lounge',
      city: 'Austin, TX',
      status: 'available',
    },
    {
      date: 'Mar 22, 2025',
      venue: 'Sonic Room',
      city: 'Nashville, TN',
      status: 'sold-out',
    },
    {
      date: 'Apr 5, 2025',
      venue: 'The Basement East',
      city: 'Brooklyn, NY',
      status: 'available',
    },
    {
      date: 'Apr 12, 2025',
      venue: 'Mercury Lounge',
      city: 'Los Angeles, CA',
      status: 'sold-out',
    },
    {
      date: 'Apr 19, 2025',
      venue: 'Underground Arts',
      city: 'Chicago, IL',
      status: 'available',
    },
  ];

  return (
    <section id="shows" className="py-20">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="space-y-4">
          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-[#1D1D1D] rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <p className="text-lg font-semibold mb-1">{show.date}</p>
                <p className="text-xl mb-1">{show.venue}</p>
                <p className="opacity-75">{show.city}</p>
              </div>
              
              {show.status === 'available' ? (
                <button className="px-6 py-2 bg-[#8A4FFF] hover:bg-[#7A3FEF] transition-colors rounded-full text-white">
                  Get Tickets
                </button>
              ) : (
                <span className="px-6 py-2 bg-[#FF4F8A] rounded-full text-white opacity-75">
                  Sold Out
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};