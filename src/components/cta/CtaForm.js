import React from "react";
import emailjs from "emailjs-com";

class CtaForm extends React.Component {
  state = {
    name: "",
    email: "",
    tel: "",
    message: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mvgtt8l",
        "cta_contact_form",
        e.target,
        "po8xAugg_ynxS4UlN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      `Gracias por tu mensaje! Enseguida te contactaremos a la dirección de email que nos has proporcionado.`
    );
    this.setState({ name: "", email: "", tel: "", message: "" });
  };

  render() {
    return (
      <form className="cta-form" onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="full-name-cta">Nombre completo</label>
          <input
            name="full-name-cta"
            id="full-name-cta"
            type="text"
            placeholder="Tu Nombre"
            required
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email-cta">Email</label>
          <input
            name="email-cta"
            id="email-cta"
            type="email"
            placeholder="tuemail@mail.com"
            required
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone-cta">Número de contacto</label>
          <input
            name="phone-cta"
            id="phone-cta"
            type="tel"
            pattern="[0-9]{9}"
            placeholder="Tu Número"
            required
            value={this.state.tel}
            onChange={(e) => this.setState({ tel: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="select-service">¿Cuál servicio te interesa?</label>
          <select name="service" id="service" required>
            <option>Selecciona una opción:</option>
            <option>Ventanas y Puertas</option>
            <option>Fachadas Ventiladas</option>
            <option>Composite y Fenólicos</option>
            <option>Mantenimiento y Reformas</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="cta-textbox">
          <label htmlFor="message-cta">¿En qué te podemos ayudar?</label>
          <textarea
            rows="20"
            cols="50"
            maxlength="500"
            className="cta-textbox-input"
            name="message-cta"
            id="message-cta"
            placeholder="Escribe aquí tu mensage"
            type="text"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
        </div>
        <button
          className="btn btn--form"
          type="submit"
          onSubmit={this.onFormSubmit}
        >
          Enviar
        </button>
      </form>
    );
  }
}

export default CtaForm;
