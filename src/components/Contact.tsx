import './Contact.css';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const CONTACT_EMAIL = 'contacto@solarired.cl';
const WHATSAPP_URL = 'https://wa.me/56931490321';
const INSTAGRAM_URL = 'https://instagram.com/solarired';
const FACEBOOK_URL = 'https://facebook.com/solarired';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contacto</h2>
      <div className="contact-grid">
        <div className="contact-grid-item">
          <a href={WHATSAPP_URL} className="contact-social whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={28} /> WhatsApp
          </a>
        </div>
        <div className="contact-grid-item">
          <a href={INSTAGRAM_URL} className="contact-social instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} /> Instagram
          </a>
        </div>
        <div className="contact-grid-item">
          <a href={FACEBOOK_URL} className="contact-social facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} /> Facebook
          </a>
        </div>
        <div className="contact-grid-item">
          <span className="contact-label">Correo</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-value">{CONTACT_EMAIL}</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
