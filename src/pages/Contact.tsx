import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFax, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "../CSS/Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact d-flex justify-content-center py-5">
        <div className="container row g-lg-3 justify-content-between">
          <h2 className="text-center section-heading">Get in Touch</h2>
          <div className="d-flex flex-column-reverse flex-md-row gap-4 justify-content-center">
            <div className="col-lg-3 col-md-4 mt-5 mt-md-0 text-center text-md-start">
              <h4>ADDRESS</h4>
              <ul className="contact-numbers p-0 d-flex flex-column gap-2 text-secondary">
                <li>4th Floor, Plot No.22,</li>
                <li>145 Murphy Canyon Rd.</li>
                <li>San Diego CA 2028</li>
                <li className="mt-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="fa-solid fa-phone-flip me-2"
                  ></FontAwesomeIcon>
                  (060) 444 434 444
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faFax}
                    className="fa-solid fa-fax me-2"
                  ></FontAwesomeIcon>
                  (060) 555 545 555
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="fa-solid fa-envelope me-2"
                  ></FontAwesomeIcon>
                  chat@simone.com
                </li>
              </ul>
              <h4 className="mt-3">FOLLOW ME</h4>
              <ul className="contact-links p-0 d-flex gap-2 text-secondary fs-5 mt-3 justify-content-center justify-content-md-start">
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fab fa-facebook me-2"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fab fa-twitter me-2"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fab fa-instagram me-2"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fab fa-linkedin me-2"
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faPinterest}
                      className="fab fa-pinterest me-2"
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-8 text-center text-md-start">
              <h4>SEND US A NOTE</h4>
              <form
                className="container-fluid row justify-content-center g-4 align-items-center"
                action="submit"
              >
                <div className="col-lg-6 col-md-12">
                  <input
                    className="p-2 rounded-2 w-100"
                    type="text"
                    name="name"
                    id="names"
                    placeholder="Name"
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input
                    className="p-2 rounded-2 w-100"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="p-2 rounded-2 w-100"
                    name="note"
                    id="note"
                    placeholder="Tell us more about your needs........"
                    rows={5}
                  ></textarea>
                </div>
                <div className="col-6 col-md-7 col-lg-4">
                  <button
                    type="submit"
                    className="green-button text-center shadow-lg rounded-pill px-5 py-3 border-0 w-100"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
