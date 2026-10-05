import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageCircle,
  FiLinkedin,
  FiGithub,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { agencyInfo, projectTypes, budgetRanges } from '../data/agencyData';
import { staggerContainer, staggerItem } from '../animations/variants';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://formspree.io/f/${agencyInfo.formspreeId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            projectType: formData.projectType,
            budget: formData.budget,
            message: formData.message,
            _subject: `Nouveau projet : ${formData.projectType} — ${formData.name}`,
          }),
        }
      );

      // Lecture de la réponse pour diagnostic
      const data = await response.json().catch(() => ({}));
      console.log('Formspree response:', response.status, data);

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        // Extraire le message d'erreur précis de Formspree
        const errMsg = data?.errors?.[0]?.message 
          || data?.error 
          || `Erreur ${response.status}`;
        setErrorMessage(errMsg);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 8000);
      }
    } catch (error) {
      console.error('Erreur Formspree :', error);
      setErrorMessage(error.message || 'Erreur de connexion');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  const inputClass = "input input-bordered w-full bg-dark-bg/50 border-white/10 focus:border-neon focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50 transition-colors";
  const labelClass = "label-text text-xs tracking-wider text-text-muted uppercase mb-2 block";

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 border-t border-white/5">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-neon/5 blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          label="CONTACT"
          title={
            <>
              Discutons de votre
              <br />
              <span className="text-neon">prochain projet.</span>
            </>
          }
          subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* COLONNE GAUCHE : INFOS */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <motion.a
              variants={staggerItem}
              href={`mailto:${agencyInfo.email}`}
              className="group flex items-start gap-4 p-5 glass rounded-2xl border border-white/5 hover:border-neon/40 transition-all duration-300"
            >
              <span className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                <FiMail className="text-neon text-lg" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] tracking-widest text-text-muted/60 uppercase mb-1">Email</p>
                <p className="text-sm font-medium text-white break-all group-hover:text-neon transition-colors">
                  {agencyInfo.email}
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={staggerItem}
              href={`tel:${agencyInfo.phone}`}
              className="group flex items-start gap-4 p-5 glass rounded-2xl border border-white/5 hover:border-neon/40 transition-all duration-300"
            >
              <span className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                <FiPhone className="text-neon text-lg" />
              </span>
              <div>
                <p className="text-[10px] tracking-widest text-text-muted/60 uppercase mb-1">Téléphone</p>
                <p className="text-sm font-medium text-white group-hover:text-neon transition-colors">
                  {agencyInfo.phoneDisplay}
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={staggerItem}
              href={`https://wa.me/${agencyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 glass rounded-2xl border border-white/5 hover:border-neon/40 transition-all duration-300"
            >
              <span className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                <FiMessageCircle className="text-neon text-lg" />
              </span>
              <div>
                <p className="text-[10px] tracking-widest text-text-muted/60 uppercase mb-1">WhatsApp</p>
                <p className="text-sm font-medium text-white group-hover:text-neon transition-colors">
                  {agencyInfo.phoneDisplay}
                </p>
              </div>
            </motion.a>

            <motion.div
              variants={staggerItem}
              className="flex items-start gap-4 p-5 glass rounded-2xl border border-white/5"
            >
              <span className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-neon text-lg" />
              </span>
              <div>
                <p className="text-[10px] tracking-widest text-text-muted/60 uppercase mb-1">Localisation</p>
                <p className="text-sm font-medium text-white">{agencyInfo.location}</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-start gap-4 p-5 glass rounded-2xl border border-white/5"
            >
              <span className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                <FiClock className="text-neon text-lg" />
              </span>
              <div>
                <p className="text-[10px] tracking-widest text-text-muted/60 uppercase mb-1">Disponibilité</p>
                <p className="text-sm font-medium text-white">{agencyInfo.availability}</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="pt-4">
              <p className="text-[10px] tracking-widest text-text-muted/60 uppercase mb-3">
                Retrouvez-nous
              </p>
              <div className="flex gap-3">
                <a
                  href={agencyInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-text-muted hover:text-neon hover:border-neon/50 transition-all duration-300"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={agencyInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-text-muted hover:text-neon hover:border-neon/50 transition-all duration-300"
                >
                  <FiGithub />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative glass-strong rounded-3xl border border-white/10 p-6 md:p-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon/10 rounded-full blur-3xl pointer-events-none" />

              {/* MESSAGE DE SUCCÈS */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-neon/10 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-neon/20 blur-xl" />
                    <FiCheckCircle className="text-neon text-4xl relative z-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">Message envoyé avec succès !</h3>
                  <p className="text-text-muted text-sm max-w-md">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              )}

              {/* MESSAGE D'ERREUR */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <FiAlertCircle className="text-red-500 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">Une erreur est survenue</h3>
                  <p className="text-red-400 text-xs max-w-md mb-4 font-mono">
                    {errorMessage}
                  </p>
                  <p className="text-text-muted text-sm max-w-md">
                    Veuillez réessayer ou nous contacter directement par email ou WhatsApp.
                  </p>
                </motion.div>
              )}

              {/* FORMULAIRE */}
              {(status === 'idle' || status === 'loading') && (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nom complet <span className="text-neon">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className={inputClass}
                        disabled={status === 'loading'}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email <span className="text-neon">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={inputClass}
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+221 XX XXX XX XX"
                        className={inputClass}
                        disabled={status === 'loading'}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Entreprise</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        className={inputClass}
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Type de projet <span className="text-neon">*</span></label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`${inputClass} ${!formData.projectType ? 'text-text-muted/50' : ''}`}
                        disabled={status === 'loading'}
                      >
                        <option value="" disabled>Sélectionnez</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-dark-card text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Budget estimatif</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`${inputClass} ${!formData.budget ? 'text-text-muted/50' : ''}`}
                        disabled={status === 'loading'}
                      >
                        <option value="" disabled>Sélectionnez</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-dark-card text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Votre message <span className="text-neon">*</span></label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                      rows={5}
                      className={`${inputClass} resize-none h-auto py-3`}
                      disabled={status === 'loading'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group btn btn-primary w-full font-semibold hover:shadow-neon-glow-strong transition-all h-14 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <FiLoader className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FiSend className="group-hover:translate-x-1 transition-transform" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-text-muted/60 text-center">
                    En envoyant ce formulaire, vous acceptez d'être recontacté par nos équipes.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;