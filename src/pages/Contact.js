import React from "react";

function Contact(props) {
  return (
    <div className="container-fluid mt-auto text-white  ">
      <div className="row min-vh-100">
        <div class="col-md-6 outer-wrap text-center">
          <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text">
            <div className="rich-text js-text-editable module-text">
              <div className="title">
                <strong>contact</strong>
              </div>
            </div>
          </div>
          <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text">
            <div className="rich-text js-text-editable module-text">
              <div>RMIT Student, Bachelor of Computer Science</div>
              <div>Artificial Intelligence</div>
              <div>Machine Learning</div>
              <div>React</div>
              <div></div>
            </div>
          </div>
          <div className="js-project-module project-module module social_icons project-module-social_icons align-">
            <div className="module-content module-content-social_icons js-module-content">
              <div className="social">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <img src="Portfolio/Syd.jpg" alt="This is" className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;