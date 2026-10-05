import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { agencyInfo, navLinks } from '../../data/agencyData';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-bg border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Glow d'arrière-plan */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon/5 blur-[120px] pointer-events-none" />

      <div className="container-custom px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* COLONNE 1 : LOGO + TAGLINE */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                {/* Glow vert derrière le logo */}
                <div className="absolute inset-0 bg-neon blur-lg opacity-30 rounded-full" />
                
                {/* Logo */}
                <img
                  src={logo}
                  alt={agencyInfo.name}
                  className="relative w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(168,255,0,0.4)]"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-display font-bold tracking-tight">
                  MasterMind<span className="text-neon">.tech</span>
                </span>
                <span className="text-[10px] text-text-muted tracking-[0.2em] mt-0.5">
                  {agencyInfo.subtitle}
                </span>
              </div>
            </div>
            
            <p className="text-text-muted text-sm mb-6 max-w-sm leading-relaxed">
              {agencyInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-2">
                <FiMapPin className="text-neon" />
                {agencyInfo.location}
              </span>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-neon transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-neon transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${agencyInfo.email}`}
                  className="text-sm text-text-muted hover:text-neon transition-colors inline-flex items-center gap-2"
                >
                  <FiMail className="text-neon" />
                  {agencyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${agencyInfo.phone}`}
                  className="text-sm text-text-muted hover:text-neon transition-colors inline-flex items-center gap-2"
                >
                  <FiPhone className="text-neon" />
                  {agencyInfo.phoneDisplay}
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-6">
              <a
                href={agencyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-muted hover:text-neon hover:border-neon/50 transition-all duration-300"
              >
                <FiLinkedin />
              </a>
              <a
                href={agencyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-muted hover:text-neon hover:border-neon/50 transition-all duration-300"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        {/* BARRE DE COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center md:text-left">
            © {currentYear} MasterMind.tech — NDONG AGENCY. Tous droits réservés.
          </p>
          <p className="text-xs text-text-muted">
            Conçu & développé avec <span className="text-neon">♥</span> à Dakar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;