import React from "react";
import { useState, useEffect } from "react";
import RenderServiceFlyers from "./RenderServiceFlyers";
import {
  smallTabletsViewWidth,
  serviceFlyerArray,
} from "../../helpers/constants";

const Services = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < smallTabletsViewWidth
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= smallTabletsViewWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section-services" id="services">
      <div className="container services-titles">
        <div className="subheading services-subheading">Servicios</div>
        <h2 className="heading-secondary services-titles">
          Nos adaptamos a lo que necesitas
        </h2>
      </div>
      {RenderServiceFlyers(serviceFlyerArray)}
    </section>
  );
};

export default Services;
