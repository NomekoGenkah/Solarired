import React from 'react';
import './Kits.css';

type EquipoItem = {
  id: string;
  nombre: string;
  tipo: 'on-grid' | 'off-grid' | 'híbrido';
  paneles: { cantidad: number; potenciaW: number };
  inversorKW: number;
  baterias: { tipo: string; capacidadKWh: number };
  potenciaTotalKW: number;
  precioUnitarioCLP: number;
  image?: string;
};

type EquiposProps = {
  items: EquipoItem[];
  onAddToCart: (item: EquipoItem) => void;
};

const Equipos: React.FC<EquiposProps> = ({ items, onAddToCart }) => {
  return (
    <section id="equipos" className="kits" aria-labelledby="equipos-title">
      <h2 id="equipos-title" className="kits__title">Equipos Solares</h2>
      <div className="kits__grid">
        {items.map((equipo) => (
          <article key={equipo.id} className="kit-card" aria-label={equipo.nombre}>
            {equipo.image && (
              <img className="kit-card__image" src={equipo.image} alt={equipo.nombre} />
            )}
            <div className="kit-card__body">
              <h3 className="kit-card__title">{equipo.nombre}</h3>
              <ul className="kit-card__desc" style={{textAlign: 'left', fontSize: '0.98em'}}>
                <li><b>Tipo:</b> {equipo.tipo}</li>
                <li><b>Paneles:</b> {equipo.paneles.cantidad} x {equipo.paneles.potenciaW}W</li>
                <li><b>Inversor:</b> {equipo.inversorKW} kW</li>
                <li><b>Baterías:</b> {equipo.baterias.tipo} {equipo.baterias.capacidadKWh > 0 ? equipo.baterias.capacidadKWh + ' kWh' : ''}</li>
                <li><b>Potencia total:</b> {equipo.potenciaTotalKW} kW</li>
              </ul>
              <div className="kit-card__footer">
                <span className="kit-card__price">${equipo.precioUnitarioCLP.toLocaleString()}</span>
                <button
                  className="kit-card__add"
                  onClick={() => onAddToCart(equipo)}
                  aria-label={`Añadir ${equipo.nombre} al carrito`}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Equipos;
export type { EquiposProps, EquipoItem };
