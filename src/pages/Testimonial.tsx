import "../CSS/Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";
import client1 from "../assets/client-sm-1.jpg";
import client3 from "../assets/client-sm-3.jpg";
export default function Testimonial() {
  return (
    <>
      <section className="testimonial d-flex justify-content-center py-5">
        <div className="container row g-4 justify-content-between">
          <h2 className="text-center section-heading">Client Speak</h2>
          <div className="col-lg-6">
            <div className="client-card d-flex flex-column gap-4 pe-lg-3 bg-light rounded-2 p-4">
              <div className="client-info d-flex gap-2 align-items-center justify-content-start">
                <img className="rounded-circle" src={client3} alt="" />
                <div className="text">
                  <h5 className="m-0">Dennis Jacques</h5>
                  <p className="m-0 text-muted">User from USA</p>
                </div>
              </div>
              <p>
                “Only trying it out since a few days. But up to now excellent.
                Seems to work flawlessly. priced simply dummy text of the
                printing and typesetting industry.”
              </p>
              <ul className="p-0 d-flex justify-content-start align-content-center gap-1">
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="client-card d-flex flex-column gap-4 pe-lg-3 bg-light rounded-2 p-4">
              <div className="client-info d-flex gap-2 align-items-center justify-content-start">
                <img className="rounded-circle" src={client1} alt="" />
                <div className="text">
                  <h5 className="m-0">Jay Shah</h5>
                  <p className="m-0 text-muted">Founder at Icomatic Pvt Ltd</p>
                </div>
              </div>
              <p>
                “Only trying it out since a few days. But up to now excellent.
                Seems to work flawlessly. priced simply dummy text of the
                printing and typesetting industry.”
              </p>
              <ul className="p-0 d-flex justify-content-start align-content-center gap-1">
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-solid fa-star text-warning"
                  />
                </li>
              </ul>
            </div>
          </div>
          <ul className="d-flex col-12 gap-2 justify-content-center">
            <li>
              <FontAwesomeIcon
                icon={faCircle}
                className="active fa-solid fa-circle rounded-circle p-1"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircle}
                className="fa-solid fa-circle rounded-circle p-1"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
