import React from 'react'
import { FaWhatsapp, FaSolarPanel, FaBatteryFull, FaWater, FaHome, FaShieldAlt } from 'react-icons/fa'
import { MdOutlineElectricBolt } from 'react-icons/md'
import './LocalSEOSection.css'

const PHONE = '56931490321'

const servicios = [
  {
    id: 'hibrido',
    icono: <MdOutlineElectricBolt />,
    titulo: 'Sistemas Solares Híbridos',
    descripcion: 'Combina el ahorro de la red eléctrica con el respaldo continuo de baterías de litio. Tu casa o parcela nunca se quedará sin energía ante cortes de luz.',
    whatsappText: 'Hola Solarired, me interesa cotizar un Sistema Solar Híbrido con baterías para mi propiedad.'
  },
  {
    id: 'off-grid',
    icono: <FaSolarPanel />,
    titulo: 'Sistemas Off-Grid (Aislados)',
    descripcion: 'Energía 100% independiente para parcelas sin empalme eléctrico. Diseñados especialmente para zonas rurales de La Serena, Coquimbo, Ovalle y Valle de Elqui.',
    whatsappText: 'Hola Solarired, necesito cotizar un Sistema Solar Off-Grid para una parcela sin red eléctrica.'
  },
  {
    id: 'on-grid',
    icono: <FaShieldAlt />,
    titulo: 'Sistemas On-Grid / Net Billing',
    descripcion: 'Conectados a la red eléctrica (CGE) bajo la Ley 20.571 de Net Billing. Genera tu propia energía e inyecta los excedentes a la red para rebajar tu cuenta a $0.',
    whatsappText: 'Hola Solarired, quisiera cotizar un Sistema On-Grid Net Billing para reducir mi cuenta de luz.'
  },
  {
    id: 'litio',
    icono: <FaBatteryFull />,
    titulo: 'Baterías de Litio Solar',
    descripcion: 'Almacenamiento de alta densidad, mayor ciclo de vida útil (+6000 ciclos) y carga ultra rápida. El corazón confiable para tu autonomía nocturna.',
    whatsappText: 'Hola Solarired, quisiera cotizar o actualizar baterías de litio para mi sistema solar.'
  },
  {
    id: 'bombeo',
    icono: <FaWater />,
    titulo: 'Bombeo Solar para Parcelas',
    descripcion: 'Extracción de agua directa desde pozos profundos y estanques sin gastar en generadores ni combustible en zonas agrícolas del Limarí y Elqui.',
    whatsappText: 'Hola Solarired, me interesa cotizar una solución de Bombeo Solar para pozo/riego.'
  },
  {
    id: 'parcelas',
    icono: <FaHome />,
    titulo: 'Soluciones para Parcelas y Casas',
    descripcion: 'Dimensionamiento a medida para viviendas residenciales, cabañas y comercios de la IV Región. Sin anticipos para iniciar el proyecto.',
    whatsappText: 'Hola Solarired, quisiera una asesoría personalizada para mi casa o parcela en la Región de Coquimbo.'
  }
]

const coberturas = [
  {
    comuna: 'La Serena',
    destacado: 'Valle de Elqui, San Joaquín, Cerro Grande, El Milagro y parcelas',
    texto: 'Atendemos proyectos solares en toda la comuna de La Serena, tanto en sectores urbanos como en parcelas de agrado camino a Vicuña y alrededores.'
  },
  {
    comuna: 'Coquimbo',
    destacado: 'Pan de Azúcar, Huachalalume, Peñuelas, Guanaqueros y Tongoy',
    texto: 'Especialistas en instalaciones solares para parcelas residenciales en Pan de Azúcar y soluciones energéticas en zonas costeras.'
  },
  {
    comuna: 'Ovalle y Valle del Limarí',
    destacado: 'Sistemas agrícolas, bombeo solar y viviendas de campo',
    texto: 'Aprovecha la radiación solar superior de la Provincia de Limarí para reducir tus costos energéticos y lograr independencia en faenas y parcelas.'
  },
  {
    comuna: 'Vicuña y Paihuano',
    destacado: 'Valle de Elqui, cabañas turísticas y viviendas rurales',
    texto: 'Zona privilegiada con una de las mejores radiaciones solares del mundo, ideal para sistemas off-grid e híbridos con baterías de litio.'
  },
  {
    comuna: 'Illapel y Choapa',
    destacado: 'Viviendas, parcelas y proyectos en Salamanca y Canela',
    texto: 'Llevamos energía limpia y confiable a las comunas de la Provincia de Choapa con garantía de instalación y servicio técnico cercano.'
  }
]

const LocalSEOSection: React.FC = () => {
  return (
    <section className="seo-section" aria-label="Servicios y Cobertura Solar en la Región de Coquimbo">
      {/* Servicios Solares */}
      <div className="seo-container" id="servicios">
        <header className="seo-header">
          <span className="seo-badge">Especialistas en Energía Solar</span>
          <h2 className="seo-title">Servicios de Instalación Solar en la Región de Coquimbo</h2>
          <p className="seo-subtitle">
            Diseñamos e instalamos soluciones fotovoltaicas personalizadas para hogares, parcelas y empresas en La Serena, Coquimbo y alrededores.
          </p>
        </header>

        <div className="seo-grid">
          {servicios.map((s) => (
            <article key={s.id} className="seo-card">
              <div className="seo-card__icon" aria-hidden="true">{s.icono}</div>
              <h3 className="seo-card__title">{s.titulo}</h3>
              <p className="seo-card__desc">{s.descripcion}</p>
              <a
                href={`https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(s.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="seo-card__cta"
                aria-label={`Cotizar ${s.titulo} por WhatsApp`}
              >
                <FaWhatsapp /> Cotizar por WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Cobertura Regional */}
      <div className="seo-container seo-coverage" id="cobertura">
        <header className="seo-header">
          <span className="seo-badge">Presencia Local</span>
          <h2 className="seo-title">Cobertura en La Serena, Coquimbo y Provincias de la IV Región</h2>
          <p className="seo-subtitle">
            Nuestro equipo técnico cubre las principales comunas y valles de la Región de Coquimbo con atención directa y visitas técnicas.
          </p>
        </header>

        <div className="coverage-grid">
          {coberturas.map((c) => (
            <div key={c.comuna} className="coverage-card">
              <h3 className="coverage-card__city">Paneles Solares en {c.comuna}</h3>
              <span className="coverage-card__zones">{c.destacado}</span>
              <p className="coverage-card__text">{c.texto}</p>
              <a
                href={`https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(`Hola Solarired, estoy en ${c.comuna} y me interesa cotizar una instalación de paneles solares.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="coverage-card__link"
              >
                <FaWhatsapp /> Consultar factibilidad en {c.comuna}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Preguntas Frecuentes SEO */}
      <div className="seo-container seo-faq">
        <header className="seo-header">
          <span className="seo-badge">Resolvemos tus dudas</span>
          <h2 className="seo-title">Preguntas Frecuentes sobre Paneles Solares en La Serena y Coquimbo</h2>
        </header>

        <div className="faq-list">
          <details className="faq-item" open>
            <summary className="faq-question">¿Instalan paneles solares en parcelas sin red eléctrica?</summary>
            <div className="faq-answer">
              <p>
                Sí, somos especialistas en <strong>sistemas solares Off-Grid (aislados) con baterías de litio</strong> para parcelas en Pan de Azúcar, Huachalalume, Valle de Elqui y sectores rurales sin conexión de empalme CGE.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">¿Cuánto puedo ahorrar con un sistema solar On-Grid en La Serena?</summary>
            <div className="faq-answer">
              <p>
                Bajo la Ley 20.571 de Net Billing, puedes reducir tu cuenta mensual de electricidad entre un <strong>70% y un 100%</strong>, inyectando los excedentes de energía generados a la red distribuidora.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-question">¿Cómo es el proceso de pago y garantía?</summary>
            <div className="faq-answer">
              <p>
                En <strong>Solarired no solicitamos anticipo</strong> para iniciar tu proyecto solar. Solo dejamos registrada la cuenta bancaria y el pago se realiza al finalizar la instalación conforme, con opciones de transferencia o tarjeta de crédito en hasta 10 cuotas precio contado.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}

export default LocalSEOSection
