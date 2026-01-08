
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    Number: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message?: string }>({ type: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({ type: 'error', message: 'Email service is not configured.' });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_number: formData.Number,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: import.meta.env.VITE_TO_EMAIL || 'chinkography@gmail.com',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({ type: 'success', message: 'Message sent — thank you!' });
      setFormData({ name: '', Number: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chinkography@gmail.com',
      href: 'mailto:chinkography@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9157130323',
      href: 'tel:+919157130323',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, India',
      extra: '[Available Worldwide]',
      href: 'https://www.google.com/maps/search/?api=1&query=Ahmedabad,India',
    },
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/chinkography/' },
    { icon: Youtube, url: 'https://youtube.com/@chinko-graphy?si=4qO-ISv2TwH4OF1z' },
    { icon: Linkedin, url: 'https://in.linkedin.com/in/chinkography-602972170' },
    { icon: Facebook, url: 'https://www.facebook.com/suthar.meet.9/' },
    { icon: MessageCircle, url: 'https://wa.me/919157130323' },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-black via-red-950 to-black text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            LET&apos;S <span className="text-red-500">CONNECT</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            You tell me what you need, and I&apos;ll tell you how to execute it creatively
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                    style={{ animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold text-lg">{info.value}</p>
                      {info.extra && <span className="text-white/60 text-sm">{info.extra}</span>}
                    </div>
                  </a>
                );
              })}
            </div>   
            

            <h4 className="text-xl font-bold mb-6">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="input"
              />
              <input
                type="tel"
                placeholder="Your Number"
                value={formData.Number}
                onChange={(e) => setFormData({ ...formData, Number: e.target.value })}
                required
                className="input"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="input"
              />
            </div>

            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              required
              className="input resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-red-600 font-bold rounded-xl hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </button>

            {status.type && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-12 border-t border-gray-800">
        <p className="text-gray-400">© 2019 CHINKOGRAPHY. All rights reserved.</p>
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(31, 41, 55, 0.5);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .input:focus {
          border-color: #dc2626;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
