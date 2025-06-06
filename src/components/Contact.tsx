import React, { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with your EmailJS template ID
        {
          to_email: 'bennettslavsky@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // You'll need to replace this with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setShowForm(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative min-h-[400px]">
      {/* Icons View */}
      <div 
        className={`absolute inset-0 flex justify-center items-center gap-12 py-12 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showForm ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <button
          onClick={() => setShowForm(true)}
          className="p-6 rounded-full bg-[#1D1D1D] hover:bg-[#8A4FFF]/10 transition-colors group"
        >
          <Mail size={48} className="text-[#8A4FFF] group-hover:scale-110 transition-transform" />
        </button>
        
        <a
          href="https://www.instagram.com/vamoose_music/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-full bg-[#1D1D1D] hover:bg-[#8A4FFF]/10 transition-colors group"
        >
          <Instagram size={48} className="text-[#8A4FFF] group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Form View */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showForm ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="max-w-2xl mx-auto">
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500">
                Message sent successfully!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
                Failed to send message. Please try again.
              </div>
            )}
            
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 px-6 py-3 bg-gradient-to-r from-[#8A4FFF] to-[#4F8AFF] hover:opacity-90 transition-opacity rounded-lg text-white font-medium ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                disabled={isSubmitting}
                className={`px-6 py-3 border border-[#8A4FFF] hover:bg-[#8A4FFF]/10 transition-colors rounded-lg text-white font-medium ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};