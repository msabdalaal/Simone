import "../CSS/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a
        href="#home"
        className="go-top position-fixed bottom-0 end-0 rounded-circle p-4 m-4 d-flex justify-content-center align-items-center"
      >
        <FontAwesomeIcon
          icon={faAngleUp}
          className="fa-solid fa-angle-up text-white fs-4"
        ></FontAwesomeIcon>
      </a>
      <nav
        className={`navbar navbar-expand-lg position-fixed w-100 text-white ${
          isScrolled && `bg-black`
        }`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fs-2 fw-semibold text-white me-auto me-lg-0"
            href="#"
          >
            Mohamed
          </a>
          <button
            className="navbar-toggler text-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="fa-solid fa-bars"
            ></FontAwesomeIcon>
          </button>
          <div
            className="collapse navbar-collapse ps-3 justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav gap-lg-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  What I Do
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav-contact m-0 d-flex align-items-center gap-3 fs-5">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="text-white" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faDribbble} className="text-white" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
