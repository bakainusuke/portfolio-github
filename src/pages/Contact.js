import React from "react";
import "./Contact.css"; 

function Contact(props) {
  return (
    <div className="container-fluid mt-auto text-white">
      <div className="row min-vh-100">
        <div className="col-md-6 outer-wrap text-center">
          <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text">
            <div className="rich-text js-text-editable module-text">
              <div className="title">
                <strong>HUY DO</strong>
              </div>
            </div>
          </div>
          <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text">
            <div className="rich-text js-text-editable module-text">
              <div>Feel free to reach out to me via social media or email.</div>
              <div>Looking forward to connecting!</div>
              <p>
                Phone number:{" "}
                <a href="tel:+61466998566" className="contact-link">
                  0466 998 566
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:huydo.henry.work@gmail.com"
                  className="contact-link"
                >
                  huydo.henry.work@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="js-project-module project-module module social_icons project-module-social_icons align-">
            <div className="module-content module-content-social_icons js-module-content">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/n.hyun.hwi/"
                      className="facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/n.huyn.hwi"
                      className="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/huy-do-hwi/"
                      className="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;