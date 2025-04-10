import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1D1D1D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#1D1D1D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1D1D1D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A4FFF]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#4F8AFF] hover:opacity-90 transition-opacity rounded-lg text-white font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-quicksand-light">Booking Inquiries</h3>
              <p className="font-quicksand-light">
                For booking inquiries, please contact us at:
              </p>
              <p className="font-quicksand-light">
                <a href="mailto:booking@vamoose.com" className="text-[#8A4FFF] hover:text-[#7A3FEF] transition-colors">
                  booking@vamoose.com
                </a>
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-quicksand-light">General Inquiries</h3>
              <p className="font-quicksand-light">
                For general questions or comments, please email:
              </p>
              <p className="font-quicksand-light">
                <a href="mailto:info@vamoose.com" className="text-[#8A4FFF] hover:text-[#7A3FEF] transition-colors">
                  info@vamoose.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};