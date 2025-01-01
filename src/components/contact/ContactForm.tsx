import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.currentTarget,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-white/10 focus:border-[#FF512F] focus:ring-1 focus:ring-[#FF512F] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-white/10 focus:border-[#FF512F] focus:ring-1 focus:ring-[#FF512F] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-white/10 focus:border-[#FF512F] focus:ring-1 focus:ring-[#FF512F] transition-colors"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
      {status === 'success' && (
        <p className="text-green-500 text-sm">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;