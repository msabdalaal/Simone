import "../CSS/Portofolio.css";

import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import project7 from "../assets/project-7.jpg";
export default function Portofolio() {
  return (
    <>
      <section className="portofolio justify-content-center d-flex py-5">
        <div className="container row align-items-start g-4">
          <h2 className="col-12 text-center section-heading">My Work</h2>
          <ul className="sort d-flex justify-content-center gap-3">
            <li>
              <a href="#" className="active py-2 px-3">
                All
              </a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Brand</a>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
          </ul>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex flex-column gap-4">
            <div className="work-card rounded-2">
              <img className="w-100 rounded-2" src={project1} alt="project-1" />
              <div className="overlay d-flex justify-content-center align-items-center flex-column text-white">
                <h5>Youtube Video</h5>
                <p>Category</p>
              </div>
            </div>
            <div className="work-card rounded-2">
              <img className="w-100 rounded-2" src={project4} alt="project-1" />
              <div className="overlay d-flex justify-content-center align-items-center flex-column text-white">
                <h5>Detailed Project</h5>
                <p>Category</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex flex-column gap-4">
            <div className="work-card rounded-2">
              <img className="w-100 rounded-2" src={project2} alt="project-1" />
              <div className="overlay d-flex justify-content-center align-items-center flex-column text-white">
                <h5>Viemo Video</h5>
                <p>Category</p>
              </div>
            </div>
            <div className="work-card rounded-2">
              <img className="w-100 rounded-2" src={project7} alt="project-1" />
              <div className="overlay d-flex justify-content-center align-items-center flex-column text-white">
                <h5>Detailed Project</h5>
                <p>Category</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex flex-column gap-4">
            <div className="work-card rounded-2">
              <img className="w-100 rounded-2" src={project3} alt="project-1" />
              <div className="overlay d-flex justify-content-center align-items-center flex-column text-white">
                <h5>Mokup Design</h5>
                <p>Category</p>
              </div>
            </div>
            <div className="work-card rounded-2">
              <img className="w-100 rounded-2" src={project5} alt="project-1" />
              <div className="overlay d-flex justify-content-center align-items-center flex-column text-white">
                <h5>Detailed Project</h5>
                <p>Category</p>
              </div>
            </div>
            <div className="work-card rounded-2">
              <img className="w-100 rounded-2" src={project6} alt="project-1" />
              <div className="overlay d-flex justify-content-center align-items-center flex-column text-white">
                <h5>Detailed Project</h5>
                <p>Category</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
