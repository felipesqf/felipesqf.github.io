import React, { Component } from "react";
import './portfolio.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
// import Profile from "../components/ProfilePic";



class Portfolio extends Component {
  //Render on the screen
    render() {
      return (
        <article>
            <NavBar/>
            <div className="portfolio" id="portfolio">
            <div className="portfolio_container">
                        <h1>Portfolio <img src="../images/git.webp" alt="vscode" className="git"/></h1>
                        <div className="portfolio_projects">
                            <div className="row">
                                <div className="col-lg-4" data-id="port1">
                                    <div className="card" >
                                    <img src="../images/bestrecommendation.PNG" className="card-img-top" alt="Best Recommendations"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Best Recommendations</h5>
                                        <p className="card-text">Find the best recommendations here.</p>
                                        <a href="https://dclucas95.github.io/Project-1-Recommendations/" target="_blank" className="btn">Application</a>
                                        <a href="https://github.com/DCLucas95/Project-1-Recommendations" target="_blank" className="btn">Github</a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-id="port2">
                                    <div className="card">
                                    <img src="../images/weather.png" className="card-img-top" alt="weather"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Weather Dashboard</h5>
                                        <p className="card-text">Worrying if it's gonna rain? Check forecast here.</p>
                                        <a href="https://felipesqf.github.io/Weather-Dashboard/" target="_blank" className="btn">Application</a>
                                        <a href="https://github.com/felipesqf/Weather-Dashboard" target="_blank" className="btn">Github</a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-4"data-id="port3">
                                    <div className="card">
                                        <img src="../images/workday.png" className="card-img-top" alt="workday"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Work Day Scheduler</h5>
                                        <p className="card-text">Start organizing your work day now</p>
                                        <a href="https://felipesqf.github.io/Work-Day-Scheduler/" target="_blank" className="btn">Application</a>
                                        <a href="https://github.com/felipesqf/Work-Day-Scheduler" target="_blank" className="btn">Github</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4" data-id="port4">
                                <div className="card">
                                    <img src="../images/passwordgen.png" className="card-img-top" alt="passgen"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Password Generator</h5>
                                        <p className="card-text">A passwaord generator using your criteria.</p>
                                        <a href="https://felipesqf.github.io/Password-Generator/" target="_blank" className="btn">Application</a>
                                        <a href="https://github.com/felipesqf/Password-Generator" target="_blank" className="btn">Github</a>
                                    </div>
                                </div>
                                </div>
                                
                                <div className="col-lg-4" data-id="port5">
                                    <div className="card" >
                                    <img src="../images/codequiz.png" className="card-img-top" alt="code quiz"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Code Quiz</h5>
                                        <p className="card-text">A multiple-choice timed code quiz.</p>
                                        <a href="https://felipesqf.github.io/Code-Quiz/" target="_blank" className="btn">Application</a>
                                        <a href="https://github.com/felipesqf/Code-Quiz" target="_blank" className="btn">Github</a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-id="port6">
                                    <div className="card" >
                                    <img src="../images/business.png" className="card-img-top" alt="BAP"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Business Advertisement Portal</h5>
                                        <p className="card-text">A free advertisement channel.</p>
                                        <a href="https://business-advertisement-portal.herokuapp.com/" target="_blank" className="btn">Application</a>
                                        <a href="https://github.com/prabhm512/business-advertisement-portal" target="_blank" className="btn">Github</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <br/><br/>
                                        <a href="https://github.com/felipesqf" target="_blank" className="btn" id="see">My Github</a>
                                        <br/><br/>
                            

                            </div>
                        </div>
                        <Bar/>
                    <Footer/>
                    </div>
        </article>
      );
    }
  }
  
  export default Portfolio;
