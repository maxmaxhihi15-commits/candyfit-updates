import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { Instagram, Mail, Phone, FileText, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { footer } = COURSE_DATA;

  return (
    <footer className="bg-darkCharcoal text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10 border-b border-gray-800">
          
          {/* Brand & Author Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xs">
                AF
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                Anna Fitt
              </span>
            </div>
            <p className="text-xs text-gray-400 font-normal leading-relaxed mb-4">
              Приведи себе у форму за 30 днів з тренуваннями біля СТІНИ. Авторська програма схуднення та оздоровлення.
            </p>
            <a
              href={footer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-full border border-white/10 transition-all"
            >
              <Instagram className="w-4 h-4 text-brand-400" />
              <span>{footer.instagramHandle}</span>
            </a>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              КОНТАКТНА ІНФОРМАЦІЯ
            </h4>
            <ul className="space-y-3 text-xs font-normal">
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{footer.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.phone}`}
                  className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{footer.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Documents & FOP Info */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              ЮРИДИЧНА ІНФОРМАЦІЯ
            </h4>
            <div className="text-xs text-gray-400 space-y-1 mb-4">
              <p className="font-semibold text-gray-200">{footer.legalName}</p>
              <p>{footer.ipn}</p>
            </div>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a
                  href={footer.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>Політика конфіденційності</span>
                </a>
              </li>
              <li>
                <a
                  href={footer.offerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>Публічна оферта</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Anna Fitt. Усі права захищено.</p>
          <p className="text-gray-400 text-[11px]">
            Платформа навчання Softbook
          </p>
        </div>

      </div>
    </footer>
  );
};
