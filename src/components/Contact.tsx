import './Contact.css';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const CONTACT_EMAIL = 'solarired.venta@gmail.com';
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=56931490321&text=Hola%20Solarired%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20propiedad%20en%20la%20Regi%C3%B3n%20de%20Coquimbo.';
const INSTAGRAM_URL = 'https://instagram.com/solarired';
const FACEBOOK_URL = 'https://facebook.com/solarired';

const Contact = () => {
  return (
    <section className="contact-section" id="contact" aria-label="Información de contacto Solarired">
      <h2>Contacto y Cotizaciones Solarired</h2>
      <p className="contact-subtitle">
        Atención técnica directa en La Serena, Coquimbo, Ovalle, Vicuña e Illapel. Escríbenos para evaluar tu proyecto solar sin costo de anticipo.
      </p>
      <div className="contact-grid">
        <div className="contact-grid-item">
          <a href={WHATSAPP_URL} className="contact-social whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp a Solarired">
            <FaWhatsapp size={28} /> WhatsApp Directo
          </a>
        </div>
        <div className="contact-grid-item">
          <a href={INSTAGRAM_URL} className="contact-social instagram" target="_blank" rel="noopener noreferrer" aria-label="Seguir a Solarired en Instagram">
            <FaInstagram size={28} /> Instagram
          </a>
        </div>
        <div className="contact-grid-item">
          <a href={FACEBOOK_URL} className="contact-social facebook" target="_blank" rel="noopener noreferrer" aria-label="Seguir a Solarired en Facebook">
            <FaFacebook size={28} /> Facebook
          </a>
        </div>
        <div className="contact-grid-item">
          <span className="contact-label">Correo Electrónico</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-value">{CONTACT_EMAIL}</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
