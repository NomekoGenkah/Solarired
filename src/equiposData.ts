import paneles2 from './assets/paneles2.jpeg';
import paneles3 from './assets/paneles3.jpeg';
import paneles from './assets/paneles.jpeg';
import panel2 from './assets/panel2.jpeg';
import type { EquipoItem } from './components/Equipos';

export const equiposData: EquipoItem[] = [
  {
    id: 'equipo-on1',
    nombre: 'Equipo On-Grid 3kW',
    tipo: 'on-grid',
    paneles: { cantidad: 6, potenciaW: 550 },
    inversorKW: 3,
    baterias: { tipo: 'N/A', capacidadKWh: 0 },
    potenciaTotalKW: 3.3,
    precioUnitarioCLP: 1850000,
    image: paneles2
  },
  {
    id: 'equipo-off1',
    nombre: 'Equipo Off-Grid 2kW',
    tipo: 'off-grid',
    paneles: { cantidad: 4, potenciaW: 500 },
    inversorKW: 2,
    baterias: { tipo: 'Litio', capacidadKWh: 4.8 },
    potenciaTotalKW: 2,
    precioUnitarioCLP: 2390000,
    image: paneles3
  },
  {
    id: 'equipo-hibrido1',
    nombre: 'Equipo Híbrido 5kW',
    tipo: 'híbrido',
    paneles: { cantidad: 10, potenciaW: 540 },
    inversorKW: 5,
    baterias: { tipo: 'Gel', capacidadKWh: 7.2 },
    potenciaTotalKW: 5.4,
    precioUnitarioCLP: 3890000,
    image: paneles
  },
  {
    id: 'equipo-on2',
    nombre: 'Equipo On-Grid 6kW',
    tipo: 'on-grid',
    paneles: { cantidad: 12, potenciaW: 550 },
    inversorKW: 6,
    baterias: { tipo: 'N/A', capacidadKWh: 0 },
    potenciaTotalKW: 6.6,
    precioUnitarioCLP: 3290000,
    image: panel2
  }
];
