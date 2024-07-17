import "../CSS/resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function resume() {
  return (
    <>
      <section className="resume justify-content-center d-flex py-5">
        <div className="container row align-items-center justify-content-center g-4">
          <h2 className="col-12 text-center section-heading">Resume</h2>
          <div className="col-md-6 d-flex flex-column gap-4">
            <h4 className="fw-semibold">My Education</h4>

            <div className="resume-card">
              <div className="card-content border p-3 rounded-2">
                <h6 className="rounded-2 fw-light">2000 - 2004</h6>
                <h4>Computer Science</h4>
                <p className="text-danger mb-3">International University</p>
                <p className="text-secondary">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
            <div className="resume-card">
              <div className="card-content border p-3 rounded-2">
                <h6 className="rounded-2 fw-light">2005 - 2008</h6>
                <h4>Bachelor Degree</h4>
                <p className="text-danger mb-3">University of California</p>
                <p className="text-secondary">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
            <div className="resume-card">
              <div className="card-content border p-3 rounded-2">
                <h6 className="rounded-2 fw-light">2009 - 2012</h6>
                <h4>Master Degree</h4>
                <p className="text-danger mb-3">Harvard University</p>
                <p className="text-secondary">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column gap-4">
            <h4 className="fw-semibold">My Experience</h4>

            <div className="resume-card">
              <div className="card-content border p-3 rounded-2">
                <h6 className="rounded-2 fw-light">2012 - 2013</h6>
                <h4>Jr. UI UX Designer</h4>
                <p className="text-danger mb-3">Themeforest</p>
                <p className="text-secondary">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>

            <div className="resume-card">
              <div className="card-content border p-3 rounded-2">
                <h6 className="rounded-2 fw-light">2014 - 2016</h6>
                <h4>Jr. Product Designer</h4>
                <p className="text-danger mb-3">Dribbble</p>
                <p className="text-secondary">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>

            <div className="resume-card">
              <div className="card-content border p-3 rounded-2">
                <h6 className="rounded-2 fw-light">2017 - 2019</h6>
                <h4>Product Designer</h4>
                <p className="text-danger mb-3">Adobe</p>
                <p className="text-secondary">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
          </div>
          <h4 className="fw-semibold">My Skills</h4>
          <div className="skill col-md-6 col-sm-12">
            <div className="title d-flex justify-content-between fw-semibold">
              <p>Web Design</p>
              <p>65%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="skill col-md-6 col-sm-12">
            <div className="title d-flex justify-content-between fw-semibold">
              <p>React JS</p>
              <p>70%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill col-md-6 col-sm-12">
            <div className="title d-flex justify-content-between fw-semibold">
              <p>HTML/CSS</p>
              <p>95%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skill col-md-6 col-sm-12">
            <div className="title d-flex justify-content-between fw-semibold">
              <p>Angular Js</p>
              <p>60%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div className="skill col-md-6 col-sm-12">
            <div className="title d-flex justify-content-between fw-semibold">
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill col-md-6 col-sm-12">
            <div className="title d-flex justify-content-between fw-semibold">
              <p>Bootstrap</p>
              <p>99%</p>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "99%" }}></div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-5">
            <a
              href="#"
              className="download text-center d-flex align-items-center justify-content-between text-secondary px-4 py-3 border border-2 fw-normal border-secondary rounded-pill mt-5"
            >
              <p className="m-0">Download CV</p>
              <FontAwesomeIcon
                icon={faDownload}
                className="fa-solid fa-download"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
