import React from "react";


function FooterNav() {
  return (
    <footer>
      <div className="container" id="contact">
                <div className="row">
                  <div className="col">
                    <a href="https://github.com/Lexi-Diamond"><i className="fa-brands fa-github"></i></a>
                  </div>
                  <div className="col">
                    <a href="https://www.linkedin.com/in/alexis-dorrity-a29438235/"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                  <div className="col">
                    <a href="https://docs.google.com/document/d/1vjzlh3DQ2YeO1eLUGHWWlO3TJS90sVp1bZVAZ-fdZkI/edit?usp=sharing"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
    </footer>
  );
}

export default FooterNav;