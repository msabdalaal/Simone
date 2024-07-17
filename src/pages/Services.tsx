import "../CSS/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faDesktop,
  faPenRuler,
  faPaintBrush,
  faChartArea,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <section className="services justify-content-center d-flex py-5">
        <div className="container row align-items-center justify-content-center px-5 g-5">
          <h2 className="col-12 text-center section-heading">What I Do?</h2>
          <div className="service d-flex col-md-6 col-sm-12 align-items-start gap-4">
            <FontAwesomeIcon
              icon={faPalette}
              className="icon p-3 shadow-sm rounded-2 fs-2 bg-white"
            />
            <div className="text">
              <h5>Graphic Design</h5>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="service d-flex col-md-6 col-sm-12 align-items-start gap-4">
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon p-3 shadow-sm rounded-2 fs-2 bg-white"
            />
            <div className="text">
              <h5>Web Design</h5>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="service d-flex col-md-6 col-sm-12 align-items-start gap-4">
            <FontAwesomeIcon
              icon={faPenRuler}
              className="icon p-3 shadow-sm rounded-2 fs-2 bg-white"
            />
            <div className="text">
              <h5>UI/UX Design</h5>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="service d-flex col-md-6 col-sm-12 align-items-start gap-4">
            <FontAwesomeIcon
              icon={faPaintBrush}
              className="icon p-3 shadow-sm rounded-2 fs-2 bg-white"
            />
            <div className="text">
              <h5>App Design & Develop</h5>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="service d-flex col-md-6 col-sm-12 align-items-start gap-4">
            <FontAwesomeIcon
              icon={faChartArea}
              className="icon p-3 shadow-sm rounded-2 fs-2 bg-white"
            />
            <div className="text">
              <h5>Business Analysis</h5>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="service d-flex col-md-6 col-sm-12 align-items-start gap-4">
            <FontAwesomeIcon
              icon={faBullhorn}
              className="icon p-3 shadow-sm rounded-2 fs-2 bg-white"
            />
            <div className="text">
              <h5>SEO Marketing</h5>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
