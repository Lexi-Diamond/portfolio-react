import React from 'react';
import resume from '../images/Resume.pdf';

const styles = {
  resume: {
    justifyContent: 'center',
  }
}

function Resume() {
  return (
      <div style={styles.resume}>
          <div className="row">
            <div id="about" class="jumbotron jumbo-style col-md-7" style={{backgroundImage: `url(${resume})`}}>
                 
                <h1 className="display-4">Click below for my Resume!</h1>
                <p className="lead"> <a href="https://docs.google.com/document/d/1vjzlh3DQ2YeO1eLUGHWWlO3TJS90sVp1bZVAZ-fdZkI/edit?usp=sharing">Resume</a>
                </p>
              </div>
      </div>
      </div>
 );
}
export default Resume;