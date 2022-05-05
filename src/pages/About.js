import React from 'react';
import background from '../images/background.jpeg'
import hiking from '../images/hiking.jpeg';
import palms from '../images/palmtrees.jpeg';
import './About.css';

export default function About() {
  return (
    <div>
    <img className="top-image" alt="Lexi" style={{backgroundImage: `url(${background})`}}/>
        <div className="row">
            <div id="about" class="jumbotron jumbo-style col-md-7" style={{backgroundImage: `url(${hiking})`}}>
                 
                <h1 className="display-4">Hello Wold!</h1>
                <p className="lead">I am a Los Angeles based full-stack web developer who is passionate about bringing creative ideas to life.
                  I am especially interested in Python and Solididty. With years of management experience, collaborating and directing projects are my specialty.
                  I love coding because it allows me to be a problem solver. When im not coding you can find me outdoors; hiking, mountain-biking and camping. 
                </p>
              </div>
              <div className="col-md-3" style={{backgroundImage: `url(${palms})`}}>
                <div className="card animationCard" style={{width: "30rem", height: "31rem"}}>
                  <div className="card-body">
                    <p className="card-text">[ . . . ]</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
}
