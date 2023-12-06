import React from "react";
import logoBWMPng from "../../img/logo/MyB_logo-removebg_bw.png";
import logoBWWebp from "../../img/logo/MyB_logo-removebg_bw.png";

class Footer extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }
  render() {
    return (
      <footer>
        <div className="container footer-grid">
          <div className="footer-logo">
            <picture>
              <source srcSet={logoBWWebp}></source>
              <source srcSet={logoBWMPng}></source>
              <img
                className="logo-ft"
                src={logoBWWebp}
                alt="logo de fingtwice en blanco y negro"
              />
            </picture>
          </div>
          <div className="footer-social-media">
            <div className="footer-title">Redes Sociales</div>

            <ul className="social-media-list">
              <li>
                <a
                  className="icon-link"
                  href="https://www.instagram.com/fingtwice.uy/"
                  target="_blank"
                >
                  <ion-icon class="media-icon" name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="https://www.facebook.com/fingtwiceuy-122705572458523"
                  target="_blank"
                >
                  <ion-icon class="media-icon" name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="https://twitter.com/TwiceFing"
                  target="_blank"
                >
                  <ion-icon class="media-icon" name="logo-twitter"></ion-icon>
                </a>
              </li>
            </ul>
            <p className="copyright">
              Copyright © {this.getYear()} by
              <br />
              M&B Fachadas y Ventanas, Inc. <br />
              All rights reserved.
            </p>
          </div>
          <div className="footer-contact">
            <div className="footer-title">Contacto</div>
            <ul className="contact-list">
              <li className="contact-item">
                <ion-icon class="contact-icon" name="logo-whatsapp"></ion-icon>
                <a
                  className="contact-link"
                  href="https://api.whatsapp.com/send?phone=0034642632080"
                  target="_blank"
                >
                  +34 642632080
                </a>
              </li>
              <li className="contact-item">
                <ion-icon class="contact-icon" name="mail-outline"></ion-icon>
                <a
                  className="contact-link"
                  href="mailto:myb.fachadasyventanas@gmail.com"
                >
                  myb.fachadasyventanas@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-company">
            <div className="footer-title">Empresa</div>
            <ul className="company-list">
              <li className="company-item">
                <a className="footer-link-company" href="#hero">
                  ¿Quienes somos?
                </a>
              </li>
              <li className="company-item">
                <a className="footer-link-company" href="#services">
                  Servicios
                </a>
              </li>
              <li className="company-item">
                <a className="footer-link-company" href="#projects">
                  Proyectos
                </a>
              </li>
              <li className="company-item">
                <a className="footer-link-company" href="#cta">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
