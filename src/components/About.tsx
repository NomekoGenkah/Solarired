import './About.css';
import React from 'react';

interface AboutProps {
  imageSrc?: string;
}

const About: React.FC<AboutProps> = ({ imageSrc }) => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Quiénes somos</h2>
          <p>Texto de presentación de la empresa. (Este texto será reemplazado por el cliente)</p>
        </div>
        {imageSrc && (
          <div className="about-image">
            <img src={imageSrc} alt="Imagen representativa de la empresa" />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
