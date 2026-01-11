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
          <h2>¿Cómo trabajamos?</h2>
          <p>
            En Solarired queremos que tu experiencia sea segura, confiable y sin complicaciones.
            Por eso, no pedimos anticipo para iniciar tu proyecto solar.
          </p>
          <p>
            Solo solicitamos que dejes registrada nuestra cuenta corriente en tu banco antes de la instalación.
            Esto nos permite que, el día de la entrega e instalación final, puedas realizar el pago de manera fácil y
            rápida mediante:
          </p>
          <ul>
            <li>
              Pago con tarjetas en nuestra máquina POS, con opción de hasta 10 cuotas precio contado.
            </li>
            <li>
              Transferencia directa desde tu banco
            </li>
          </ul>
          <p>
            Así garantizamos transparencia, confianza y un proceso 100% cómodo para ti.
          </p>
        </div>
        {videoSrc && (
          <div className="about-image">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              className="about-video"
              aria-label="Video representativo de la empresa"
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
