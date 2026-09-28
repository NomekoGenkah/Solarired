import './About.css';
import React from 'react';

interface AboutProps {
  videoSrc?: string;
}

const About: React.FC<AboutProps> = ({ videoSrc }) => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Instalación Solar Confiable: ¿Cómo trabajamos en la Región de Coquimbo?</h2>
          <p>
            En <strong>Solarired</strong> queremos que tu transición hacia la energía solar sea segura, transparente y sin riesgos.
            Por eso, <strong>no pedimos anticipo</strong> para iniciar tu proyecto de paneles solares en La Serena, Coquimbo, Ovalle y zonas de parcelas.
          </p>
          <p>
            Solo solicitamos que dejes registrada nuestra cuenta corriente en tu banco antes de la instalación.
            Esto nos permite que, el día de la entrega e instalación final certificada, puedas realizar el pago de manera cómoda y
            rápida mediante:
          </p>
          <ul>
            <li>
              Pago con tarjetas en nuestra máquina POS, con opción de hasta 10 cuotas precio contado.
            </li>
            <li>
              Transferencia directa desde tu banco.
            </li>
          </ul>
          <p>
            Así garantizamos confianza absoluta, máxima transparencia y un servicio técnico cercano para tu tranquilidad.
          </p>
        </div>
        {videoSrc && (
          <div className="about-image">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="about-video"
              aria-label="Video de instalación de paneles solares en Solarired"
            >
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
