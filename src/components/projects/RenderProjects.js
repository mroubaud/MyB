import React from "react";
import { useState, useEffect } from "react";

// const numSlides =  round (projectsArray.length/projectsPerSlide);

const Renderprojects = (
  projectsArray,
  dotsArray,
  isMobile,
  numSlides,
  projectsPerSlide
) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let prevSlide = 0;
  const projectsDotsEl = document.getElementsByClassName("dot-projects");

  useEffect(() => {
    if (!isMobile) {
      projectsDotsEl[0].classList.add("dot-active-projects");
    }
    setCurrentSlide(0);
  }, [isMobile]);

  const onHandleClickDots = (e) => {
    if (isMobile) {
      if (e.target.classList[0] === "dot-projects") {
        prevSlide = currentSlide;
        projectsDotsEl[prevSlide].classList.remove("dot-active-projects");
        switch (e.target.id) {
          case "project dot 1": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(0);
            break;
          }
          case "project dot 2": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(1);
            break;
          }
          case "project dot 3": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(2);
            break;
          }
          case "project dot 4": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(3);
            break;
          }
          case "project dot 5": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(4);
            break;
          }
          default: {
            return;
          }
        }
      }
    }
    if (!isMobile) {
      if (e.target.classList[0] === "dot-projects") {
        prevSlide = currentSlide;
        projectsDotsEl[prevSlide].classList.remove("dot-active-projects");
        switch (e.target.id) {
          case "project dot 1": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(0);
            break;
          }
          case "project dot 2": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(1);
            break;
          }
          case "project dot 3": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(2);
            break;
          }
          case "project dot 4": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(3);
            break;
          }
          case "project dot 5": {
            e.target.classList.add("dot-active-projects");
            setCurrentSlide(4);
            break;
          }
          default: {
            return;
          }
        }
      }
    }
  };

  const onHandleClickSlider = (e) => {
    prevSlide = currentSlide;
    projectsDotsEl[prevSlide].classList.remove("dot-active-projects");

    //click flecha derecha
    if (e.target.name === "chevron-forward-circle-outline") {
      if (prevSlide === numSlides - 1) {
        projectsDotsEl[0].classList.add("dot-active-projects");
        setCurrentSlide(0);
      } else {
        projectsDotsEl[prevSlide + 1].classList.add("dot-active-projects");
        setCurrentSlide(prevSlide + 1);
      }
    }
    //click flecha izq
    if (e.target.name === "chevron-back-circle-outline") {
      if (prevSlide === 0) {
        projectsDotsEl[numSlides - 1].classList.add("dot-active-projects");
        setCurrentSlide(numSlides - 1);
      } else {
        projectsDotsEl[prevSlide - 1].classList.add("dot-active-projects");
        setCurrentSlide(prevSlide - 1);
      }
    }
  };
  return (
    <div className="container">
      <div className="slider-projects">
        <div className="arrow-slider-projects">
          <div className="arrow-left-slider-projects">
            <button
              className="btn-arrow-projects"
              onClick={onHandleClickSlider}
            >
              <ion-icon
                name="chevron-back-circle-outline"
                class="arrow-icon-projects"
              ></ion-icon>
            </button>
          </div>
          <div className="slide-container-projects">
            {projectsArray
              .filter((project) => {
                let projectItem = 0;
                switch (project.id) {
                  case "project 1": {
                    projectItem = 1;
                    break;
                  }
                  case "project 2": {
                    projectItem = 2;
                    break;
                  }
                  case "project 3": {
                    projectItem = 3;
                    break;
                  }
                  case "project 4": {
                    projectItem = 4;
                    break;
                  }
                  case "project 5": {
                    projectItem = 5;
                    break;
                  }
                  default:
                }

                return (
                  currentSlide * projectsPerSlide < projectItem &&
                  projectItem <= (currentSlide + 1) * projectsPerSlide
                );
              })
              .map((project) => {
                return (
                  <div className="slide">
                    <div className="project">
                      <figure className="figure-project" key={project.id}>
                        <div className="project-content">
                          <div className="project-name">{project.name}</div>
                          <div className="project-description">
                            {project.description}
                          </div>
                        </div>
                        <img
                          className="project-img"
                          alt={project.imgAlt}
                          src={project.img}
                        />
                      </figure>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="arrow-right-slider-projects">
            <button
              className="btn-arrow-projects"
              onClick={onHandleClickSlider}
            >
              <ion-icon
                name="chevron-forward-circle-outline"
                class="arrow-icon-projects"
              ></ion-icon>
            </button>
          </div>
        </div>
        <div className="dot-slider-projects">
          {dotsArray.map((dot) => {
            return (
              <button className="btn-dot-projects" onClick={onHandleClickDots}>
                <ion-icon
                  name="ellipse-outline"
                  class="dot-projects"
                  id={dot.id}
                ></ion-icon>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Renderprojects;
