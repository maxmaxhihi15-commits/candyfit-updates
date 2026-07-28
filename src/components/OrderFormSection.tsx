import React, { useState } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Send, CheckCircle2, AlertCircle, Lock } from 'lucide-react';

export const OrderFormSection: React.FC = () => {
  const { orderForm, footer } = COURSE_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: true,
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage("Будь ласка, вкажіть ваше ім'я.");
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Будь ласка, введіть коректну e-mail адресу.');
      return;
    }

    if (formData.phone.length < 9) {
      setStatus('error');
      setErrorMessage('Будь ласка, введіть дійсний номер телефону.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Необхідно погодитися з усім зазначеним.');
      return;
    }

    // Success simulation for lead capture
    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section id="order-form" className="py-12 sm:py-16 bg-white border-t border-lightBorder/80">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-b from-warmBg to-pinkAccent/30 rounded-3xl p-6 sm:p-8 border border-lightBorder shadow-card text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
            <Send className="w-6 h-6" />
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-darkCharcoal tracking-tight mb-2">
            {orderForm.title}
          </h2>
          <p className="text-xs sm:text-sm text-softGray font-normal mb-6">
            {orderForm.subtitle}
          </p>

          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <h3 className="text-sm sm:text-base font-bold text-emerald-800 mb-1">
                {orderForm.successMessage}
              </h3>
              <p className="text-xs text-emerald-600">
                Ми зв'яжемося з вами найближчим часом.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name-input" className="block text-xs font-semibold text-darkCharcoal mb-1">
                  Ваше ім'я
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder={orderForm.placeholders.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-lightBorder bg-white text-sm text-darkCharcoal focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email-input" className="block text-xs font-semibold text-darkCharcoal mb-1">
                  Ваш E-mail
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder={orderForm.placeholders.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-lightBorder bg-white text-sm text-darkCharcoal focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone-input" className="block text-xs font-semibold text-darkCharcoal mb-1">
                  Номер телефону
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  placeholder={orderForm.placeholders.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-lightBorder bg-white text-sm text-darkCharcoal focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  required
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="consent-checkbox"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded border-lightBorder text-brand-500 focus:ring-brand-500"
                />
                <label htmlFor="consent-checkbox" className="text-[11px] text-softGray leading-snug">
                  Я погоджуюся з{' '}
                  <a href={footer.privacyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-600">
                    Політикою конфіденційності
                  </a>{' '}
                  та{' '}
                  <a href={footer.offerUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-600">
                    Публічною офертою
                  </a>.
                </label>
              </div>

              {/* Validation Error Banner */}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage || orderForm.errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-sm sm:text-base py-4 rounded-xl shadow-cta transition-all hover:scale-[1.01]"
              >
                <span>{orderForm.buttonLabel}</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-softGray font-medium pt-2">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                <span>{orderForm.note}</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
