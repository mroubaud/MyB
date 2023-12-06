import React from "react";
import { useState, useEffect } from "react";
import RenderProjects from "./RenderProjects";
import {
  mobileViewWidth,
  projectsPerSlideMobile,
  projectsPerSlideNonMobile,
  projectsNumSlidesNonMobile,
  projectsNumSlidesMobile,
  dotsProjectArrayMobile,
  dotsProjectArrayNotMobile,
  projectsArray,
} from "../../helpers/constants";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileViewWidth
  );
  const dotsArray = isMobile
    ? dotsProjectArrayMobile
    : dotsProjectArrayNotMobile;
  const projectsPerSlide = isMobile
    ? projectsPerSlideMobile
    : projectsPerSlideNonMobile;
  const numSlides = isMobile
    ? projectsNumSlidesMobile
    : projectsNumSlidesNonMobile;

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= mobileViewWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section-projects" id="projects">
      <div className="container projects-titles">
        <h3 className="subheading projects-subheading">Proyectos</h3>
        <h2 className="heading-secondary projects-title">
          Nuestros trabajos y clientes
        </h2>
      </div>
      {RenderProjects(
        projectsArray,
        dotsArray,
        isMobile,
        numSlides,
        projectsPerSlide
      )}
    </section>
  );
};

export default Projects;
