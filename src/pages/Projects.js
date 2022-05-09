import React from "react";
import Aymn from '../images/aymn.jpeg';
import Trp from '../images/trp.jpeg';
import Notetaker from '../images/Notetaker.jpeg';
import DayPlanner from '../images/dayplanner.jpeg';
import CodeQuiz from '../images/Screenshot1.jpeg';
import PasswordGenerator from '../images/passwordgenerator.jpeg';
import './About.css';

export default function Projects () {
        return (
            <div className="container">
            <div>
                <h2>Projects</h2>
            </div>

            <div className="row">
                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "47rem" }}>
                <img src={Aymn} className="card-img" alt=" " style={{ height: "420px", width: "740px" }}/>
                <h3 className="aymntitle">All Your Music Needs</h3>
                <h5 className="card-title text-info" style={{ textAlign: "center" }}><a href="https://github.com/Lexi-Diamond"><i className="fa-brands fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "34rem" }}>
                    <img src={Trp} className="card-img" alt=" " style={{ height: "420px", width: "520px" }}/>
                    <h3>The Recipe Box</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}><a href="https://github.com/Lexi-Diamond"><i className="fa-brands fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img src={Notetaker} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3>Note Taker</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}><a href="https://github.com/Lexi-Diamond"><i className="fa-brands fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img src={DayPlanner} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3>Day Planner</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}><a href="https://github.com/Lexi-Diamond"><i className="fa-brands fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img src={CodeQuiz} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3>Code Quiz</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}><a href="https://github.com/Lexi-Diamond"><i className="fa-brands fa-github"></i></a></h5>
                </div>

                <div className="card mb-1 col-md-3 bg-white mx-left" style={{ width: "18rem" }}>
                    <img src={PasswordGenerator} className="card-img" alt=" " style={{ height: "200px", width: "200px" }}/>
                    <h3>Password Generator</h3>
                    <h5 className="card-title text-info" style={{ textAlign: "center" }}><a href="https://github.com/Lexi-Diamond"><i className="fa-brands fa-github"></i></a></h5>
                </div>
            </div>
            </div>
        )
    }
