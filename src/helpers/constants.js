// image projects
import React from "react";
import ImgTorreLapena from "../img/projects/torre_mecanica_lapena.png";
import ImgSanIgnacioIdom from "../img/projects/san_ignacio_idom.png";
import ImgDicsesuOurense34 from "../img/projects/discesur_ourense_34.png";
import ImgGrupoGMP from "../img/projects/grupo_gmp.png";
import ImgAscensorArcuri from "../img/projects/ascensor_arcuri.png";

// Port View Width
export const smallTabletsViewWidth = 970;
export const mobileViewWidth = 672;

//Arrays and constants services

export const serviceFlyerArray = [
  {
    serviceClass: "service-plan",
    serviceName: "Ventanas y puertas",
    serviceDescription:
      "Ofrece funcionalidad, estética, ahorro energético y mantiene la vivienda en una temperatura optima y estable. Las ventanas de PVC suelen ser más eficientes energéticamente y económicas, ideales para climas extremos y requieren menor mantenimiento. Las ventanas de aluminio son más resistentes y duraderas, con un aspecto moderno y minimalista.",
  },
  {
    serviceClass: "service-plan",
    serviceName: "Fachadas Ventiladas",
    serviceDescription:
      "Dan un aspecto rejuvenecedor, ahorra en costes de energía, y mejora el aislamiento. Sistema de acristalamiento en doble piel sobre un muro cortina instalado, con ventajas como el control de la temperatura del edificio, modernizar la fachada sin intervenirla, protección de la piel interior del edificio, posibilidad de hacer fachadas decorativas con cristal templado impreso.",
  },
  {
    serviceClass: "service-plan",
    serviceName: "Composite y fenólicos",
    serviceDescription:
      "Ofrecen nuevas e innovadoras posibilidades para la arquitectura, el diseño y la construcción, que hace explorar y transmitir nuevas modalidades de imagen. Ahorra tiempo, riesgos y se logra un resultado eficaz, preciso y profesional.",
  },
  {
    serviceClass: "service-plan premium",
    serviceName: "Mantenimiento y Reformas",
    serviceDescription:
      "Desde las labores más sencillas como colgar un cuadro hasta reformas integrales de viviendas. Siempre de la mano de profesionales de confianza y con la garantía de contar con el respaldo de una empresa como Interdomicilio.",
  },
];

//Arrays and constants projects
export const projectsPerSlideMobile = 1;
export const projectsPerSlideNonMobile = 1;
export const projectsNumSlidesNonMobile = 5;
export const projectsNumSlidesMobile = 5;
export const projectsArray = [
  {
    id: "project 1",
    name: "Grupo GMP",
    description:
      "Instalación de ventanas y terminaciones en  GMP, un grupo imobiliario patrimonialista, con edificios de oficinas innovadores, sostenibles y orientados a las personas.",
    img: ImgGrupoGMP,
    imgAlt: "Edificio de oficinas de grupo GMP",
  },
  {
    id: "project 2",
    name: "San Ignacio Idom",
    description: "Instalación de ventanas y terminaciones de San Ignacio Idom.",
    img: ImgSanIgnacioIdom,
    imgAlt: "Edificio San Ignacio Idom",
  },
  {
    id: "project 3",
    name: "Discesur Orense 34",
    description:
      "Instalamos sanitarios innovadores en tienda con muebles de cocina y venta de cerámica y madera con zona de exposición.",
    img: ImgDicsesuOurense34,
    imgAlt: "Casa de dos plantas con coche blanco aparcado fuera",
  },
  {
    id: "project 4",
    name: "Torre Mecánica La Peña",
    description:
      "Se ha reformado el muro cortina, carpintería cristal, y todo el cristal de la entrada del edificio.",
    img: ImgTorreLapena,
    imgAlt: "Edificio Torre Mecánica La Peña",
  },
  {
    id: "project 5",
    name: "Ascensor Arcuri",
    description:
      "El Ayuntamiento de Bilbao conecta con accesibilidad universal Atxuri y Solokoetxe gracias a un ascensor que completa los itinerarios accesibles entre el casco viejo y Santutxu.",
    img: ImgAscensorArcuri,
    imgAlt: "Ascensor Arcuri",
  },
];
export const dotsProjectArrayNotMobile = [
  {
    id: "project dot 1",
    name: "dot 1",
  },
  {
    id: "project dot 2",
    name: "dot 2",
  },
  {
    id: "project dot 3",
    name: "dot 3",
  },
  {
    id: "project dot 4",
    name: "dot 4",
  },
  {
    id: "project dot 5",
    name: "dot 5",
  },
];
export const dotsProjectArrayMobile = [
  {
    id: "project dot 1",
    name: "dot 1",
  },
  {
    id: "project dot 2",
    name: "dot 2",
  },
  {
    id: "project dot 3",
    name: "dot 3",
  },
  {
    id: "project dot 4",
    name: "dot 4",
  },
  {
    id: "project dot 5",
    name: "dot 5",
  },
];
