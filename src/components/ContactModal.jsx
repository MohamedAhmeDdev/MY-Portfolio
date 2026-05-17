import { useState } from "react";
import { useLockScroll } from "../hooks/useLockScroll";
import { X, AlertCircle, CheckCircle } from "lucide-react"; // Added CheckCircle icon
import emailjs from '@emailjs/browser';

export default function ContactModal({ dark, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Added success state

  useLockScroll(true);

  // Clear errors when the user starts correcting the fields
  const handleInputChange = (field, value) => {
    if (error) setError('');
    if (success) setSuccess(false);
    setForm(f => ({ ...f, [field]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  setError('');
  setSuccess(false);

  // Quick client-side validation fallback
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    setError('Please fill out all fields before sending.');
    setSending(false);
    return;
  }

  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;   
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;  
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;  

  const templateParams = {
    name: form.name,      // ✅ Matches {{name}} in template
    email: form.email,    // ✅ Matches {{email}} in template
    message: form.message, // ✅ Matches {{message}} in template
    reply_to: form.email,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('Email sent successfully:', response.text);
    
    setForm({ name: '', email: '', message: '' });
    setSuccess(true);
    setSending(false);
    
    // Close modal after showing success message for 2 seconds
    setTimeout(() => {
      onClose();
    }, 2000);
    
  } catch (err) {
    console.error('Failed to send email:', err);
    
    // Dynamic, smart error messaging based on context
    if (!navigator.onLine) {
      setError('Network offline. Please check your internet connection and try again.');
    } else if (err?.status === 400 || err?.status === 403) {
      setError('There seems to be an issue with the email service. Please try again later or contact me directly at ma07041705@gmail.com');
    } else {
      setError('Something went wrong on our end. Please try again in a few moments.');
    }
    
    setSending(false);
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div onClick={onClose} className="absolute inset-0 bg-[#0a0a0f]/40 backdrop-blur-md transition-opacity duration-300" />

      <div className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border transition-all duration-300 ${
        dark ? "bg-[#0d0d14] border-white/10 text-white" : "bg-white border-black/10 text-[#0a0a0f]"
      }`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-colors border border-theme-subtle text-low-contrast-theme hover:text-main-theme"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        <div className="mb-6">
          <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-low-contrast-theme">
            Contact
          </span>
          <h3 className="font-serif font-bold text-2xl mt-1 tracking-tight text-main-theme">
            Drop a line
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Success Alert Box UI */}
          {success && (
            <div 
              role="alert" 
              className={`flex items-start gap-3 p-4 rounded-xl text-sm font-sans border transition-all duration-200 ${
                dark 
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                  : "bg-emerald-50 border-emerald-200 text-emerald-700"
              }`}
            >
              <CheckCircle size={18} className="shrink-0 mt-0.5 text-emerald-500" />
              <div>
                <p className="font-semibold mb-0.5">Email Sent Successfully!</p>
                <p className="opacity-90 leading-relaxed">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {/* Error Alert Box UI */}
          {error && !success && (
            <div 
              role="alert" 
              className={`flex items-start gap-3 p-4 rounded-xl text-sm font-sans border transition-all duration-200 animate-shake ${
                dark 
                  ? "bg-red-500/10 border-red-500/20 text-red-400" 
                  : "bg-red-50 border-red-200 text-red-700"
              }`}
            >
              <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
              <div>
                <p className="font-semibold mb-0.5">Delivery Failed</p>
                <p className="opacity-90 leading-relaxed">{error}</p>
              </div>
            </div>
          )}

          {/* Only show form fields when not in success state */}
          {!success && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["name", "Your name", "text"],
                  ["email", "Email address", "email"]
                ].map(([field, ph, type]) => (
                  <div key={field}>
                    <label className="block font-sans text-xs font-bold mb-1.5 uppercase tracking-widest text-low-contrast-theme">
                      {field}
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={ph}
                      value={form[field]}
                      onChange={e => handleInputChange(field, e.target.value)}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      className={`w-full font-sans text-sm px-4 py-3 rounded-xl border border-theme-subtle bg-surface-theme outline-none transition-all duration-200 text-main-theme ${
                        focused === field ? "border-indigo-500 ring-2 ring-indigo-500/15" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block font-sans text-xs font-bold mb-1.5 uppercase tracking-widest text-low-contrast-theme">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project parameters, timeline, and goals..."
                  value={form.message}
                  onChange={e => handleInputChange("message", e.target.value)}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`w-full font-sans text-sm px-4 py-3 rounded-xl border border-theme-subtle bg-surface-theme outline-none resize-y min-h-[100px] transition-all duration-200 text-main-theme ${
                    focused === "message" ? "border-indigo-500 ring-2 ring-indigo-500/15" : ""
                  }`}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                <p className="font-sans text-xs text-low-contrast-theme font-medium order-2 sm:order-1 text-center sm:text-left">
                  Reply within 24 hours ✦
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl font-sans text-sm font-bold transition-all duration-300 min-w-[140px] active:scale-95 text-center order-1 sm:order-2 ${
                    sending
                      ? "bg-surface-theme text-low-contrast-theme cursor-not-allowed opacity-50"
                      : "bg-gradient-to-r from-emerald-400 to-indigo-500 text-white hover:opacity-95 shadow-sm cursor-pointer"
                  }`}
                >
                  {sending ? "Sending…" : "Send message →"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}