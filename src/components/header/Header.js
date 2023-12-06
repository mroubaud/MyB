import React, { useEffect, useState } from "react";
import logo from "../../img/logo/MyB_logo-removebg.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    const sectionHeroEl = document.querySelector(".section-hero");

    const callBackFunction = (entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setIsSticky(false);
      }
      if (entry.isIntersecting) {
        setIsSticky(true);
      }
    };
    const options = {
      root: null,
      rootMargin: "-80px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(callBackFunction, options);
    observer.observe(sectionHeroEl);
    if (!isSticky) {
      document.body.classList.add("sticky");
    }
    if (isSticky) {
      document.body.classList.remove("sticky");
    }
  }, [isSticky]);

  useEffect(() => {
    const headerEl = document.querySelector(".header");
    if (isMobileNav) {
      headerEl.classList.add("mobile-nav-visible");
    }
    if (!isMobileNav) {
      headerEl.classList.remove("mobile-nav-visible");
    }
  }, [isMobileNav]);

  const HandleClickMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  const HandleNavClick = (e) => {
    e.preventDefault();
    if (isMobileNav) {
      setIsMobileNav(!isMobileNav);
    }
    const href = e.target.attributes.href.nodeValue;
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <a href="#">
        <img className="logo-header" alt="logo fingtwice" src={logo} />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#" onClick={HandleNavClick}>
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#services"
              onClick={HandleNavClick}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#projects"
              onClick={HandleNavClick}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className="main-nav-link nav-cta"
              href="#cta"
              onClick={HandleNavClick}
            >
              Contactar
            </a>
          </li>
        </ul>
        {/* Mobile nav */}
      </nav>
      <button className="btn-mobile-nav" onClick={HandleClickMobileNav}>
        <ion-icon class="mobile-nav-icon" name="menu-outline"></ion-icon>
        <ion-icon class="mobile-nav-icon" name="close-outline"></ion-icon>
      </button>
      {/* <!-- <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button> --> */}
    </header>
  );
};

export default Header;
