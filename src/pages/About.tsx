import "../CSS/About.css";

export default function About() {
  return (
    <>
      <section className="about d-flex py-5 justify-content-center" id="about">
        <div className="container row align-items-center g-5">
          <h2 className="col-12 text-center section-heading">Know Me More</h2>
          <div className="col-lg-9 col-sm-12 text-sm-center text-lg-start">
            <h2 className="fw-semibold">
              I'm <span>Simone Olivia,</span> a Web Developer
            </h2>
            <p className="lh-lg">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.{" "}
              <br />
              <br />
              Delivering work within time and budget which meets client's
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
              Lorem Ipsum has been the industry's standard dummy text ever when
              an unknown printer took a galley.
            </p>
          </div>
          <div className="col-lg-3 col-sm-12">
            <h6>
              Name:<span className="fw-light"> Simone Olivia</span>
            </h6>
            <div className="sep"></div>
            <h6>
              Email:<span className="fw-normal green"> chat@simone.com</span>
            </h6>
            <div className="sep"></div>
            <h6>
              Age:<span className="fw-light"> 28</span>
            </h6>
            <div className="sep"></div>
            <h6 className="mb-5">
              From:<span className="fw-light"> Los Angeles, California</span>
            </h6>
            <a
              href="#"
              className="green-button shadow-lg rounded-pill px-5 py-3"
            >
              Download CV
            </a>
          </div>
          <div className="insight col-md-3 col-sm-6 text-center border-end">
            <h1 className="text-secondary">10+</h1>
            <p>Years Experiance</p>
          </div>
          <div className="insight col-md-3 col-sm-6 text-center border-end">
            <h1 className="text-secondary">250+</h1>
            <p>Happy Clients</p>
          </div>
          <div className="insight col-md-3 col-sm-6 text-center border-end">
            <h1 className="text-secondary">650+</h1>
            <p>Projects Done</p>
          </div>
          <div className="insight col-md-3 col-sm-6 text-center">
            <h1 className="text-secondary">38</h1>
            <p>Get Awards</p>
          </div>
        </div>
      </section>
    </>
  );
}
