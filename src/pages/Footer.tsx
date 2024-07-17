import "../CSS/Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="d-flex justify-content-center py-5">
        <div className="container d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-between">
          <p className="m-0">
            Copyright © 2022 <span>Simone</span>. All Rights Reserved.
          </p>
          <div className="terms d-flex align-items-center">
            <a className="m-0">Terms & Policy</a>
            <div className="sep"></div>
            <a className="m-0">Disclaimer</a>
          </div>
        </div>
      </footer>
    </>
  );
}
