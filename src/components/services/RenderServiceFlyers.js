import React from "react";

const RenderServiceFlyers = (servicesArray) => {
  return (
    <div className="container grid grid--2-cols margin-bottom-sm">
      {servicesArray.map((service) => {
        return (
          <div className={service.serviceClass}>
            <div className="service-name">
              <p className="service-title">{service.serviceName}</p>
            </div>
            <div className="service-features">
              <p className="service-description">
                {service.serviceDescription}
              </p>
            </div>
            <a href="#cta" className="btn btn-services">
              Me interesa!
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default RenderServiceFlyers;
