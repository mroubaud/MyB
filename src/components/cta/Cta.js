import React from "react";
import CtaForm from "./CtaForm";

class Cta extends React.Component {
  render() {
    return (
      <section className="cta" id="cta">
        <div className="container">
          <div className="cta-grid">
            <div className="form-box-cta">
              <h2 className="heading-secondary cta-title">
                Contacta con nosotros!
              </h2>
              <p className="cta-text">
                Si estás interesad@ en alguno de nuestros servicios no dudes en
                contactarnos! Estaremos encantados de atenderte y responder tus
                consultas. Completa el formulario a continuación con tus datos y
                los campos requeridos, nos pondremos en contacto contigo a la
                brevedad.
              </p>
              <CtaForm />
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="man making a call with his phone"
            ></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;
