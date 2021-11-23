import React from "react";

export default function Contact() {
  return (
    <div className="main__contact">
      <h2 className="main__contact-name">Julio Teixeira</h2>
      <h3 className="main__contact-sub">Web Developer</h3>
      <h4 className="main__contact-site">julioteixeira.website</h4>
      <div className="main__contact-btns">
        <a href="#" className="btn btn-email">
          <i class="fas fa-envelope"></i>Email
        </a>
        <a
          href="https://www.linkedin.com/in/jcctcybernetsystems/"
          className="btn btn-linkedin"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  );
}
// https://www.linkedin.com/in/jcctcybernetsystems/
