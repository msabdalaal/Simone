import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../CSS/Home.css";

function App() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "I am Mohamed Sayed",
    "I am a Web Developer",
    "I am Graphic Designer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, phrases]);
  return (
    <>
      <section className="landing vh-100" id="home">
        <div className="overlay h-100 pt-5 d-flex justify-content-center align-items-center flex-column text-white gap-4">
          <h3>Welcome</h3>
          <h1 className="fw-semibold d-flex text-center">
            {text} <span className="cursor">|</span>
          </h1>

          <h5 className="fw-normal text-light">based in Cairo, Egypt.</h5>
          <a href="#" className="rounded-pill fw-semibold py-3 px-5 button ">
            Hire Me
          </a>
          <a href="#about" className="d-flex justify-content-center">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="angle fs-4 text-white"
            ></FontAwesomeIcon>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
