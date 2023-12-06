import React from "react";
import heroImgCompressedPng from "../../img/hero/hero.jpeg";
import heroImgCompressedWebp from "../../img/hero/hero.webp";
// import heroImg from "../../img/hero/hero-img.png";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <section className="section-hero" id="hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary hero-title">¿Quiénes Somos?</h1>
              <p className="hero-text">
                En <strong>MyB</strong> contamos con mas de diecisiete años de
                experiencia en la construcción y sus ramas. Hacemos todo tipo de
                reformas, mantenimiento en el hogar, fachadas ventiladas en los
                edificios, con la máxima calidad y estándares de exigencia.
                Puedes contactar con nosotros atreves del formulario.
              </p>
              <a href="#cta" className="btn btn-cta margin-right-sm">
                Contactar
              </a>
              <a href="#services" className="btn btn-about-us">
                Servicios &darr;
              </a>
            </div>
            <div className="img-hero-box">
              <picture>
                <source srcSet={heroImgCompressedWebp}></source>
                <source srcSet={heroImgCompressedPng}></source>
                <img
                  className="hero-img"
                  // src="{heroImg}"
                  src={heroImgCompressedWebp}
                  alt="Fotos de edificios y sus ventanas"
                  rel="preload"
                />
              </picture>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
