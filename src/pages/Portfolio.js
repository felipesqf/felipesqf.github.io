import React, { Component } from "react";
import './portfolio.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
// import Profile from "../components/ProfilePic";



class Portfolio extends Component {
    state = {
        projects: [
        {
          image:"../images/bestrecommendation.PNG",
          alt: "Best Recommendations",
          title: "Best Recommendations",
          text: "Find the best recommendations here.",
          github: "https://dclucas95.github.io/Project-1-Recommendations/",
          application: "https://github.com/DCLucas95/Project-1-Recommendations"
        },
        {
          image:"../images/weather.png",
          alt: "weather",
          title: "Weather Dashboard",
          text: "Worrying if it's gonna rain? Check forecast here.",
          github: "https://felipesqf.github.io/Weather-Dashboard/",
          application: "https://github.com/felipesqf/Weather-Dashboard"
        },
        {
          image:"../images/workday.png",
          alt: "workday",
          title: "Work Day Scheduler",
          text: "Start organizing your work day now",
          github: "https://felipesqf.github.io/Work-Day-Scheduler/",
          application: "https://github.com/felipesqf/Work-Day-Scheduler"
        },
        {
          image:"../images/passwordgen.png",
          alt: "passgen",
          title: "Password Generator",
          text: "A passwaord generator using your criteria.",
          github: "hhttps://felipesqf.github.io/Password-Generator/",
          application: "https://github.com/felipesqf/Password-Generator"
        },
        {
          image:"../images/codequiz.png",
          alt: "code quiz",
          title: "Code Quiz",
          text: " multiple-choice timed code quiz.",
          github: "https://felipesqf.github.io/Code-Quiz/",
          application: "https://github.com/felipesqf/Code-Quiz"
        },
        {
          image:"../images/business.png",
          alt: "BAP",
          title: "Business Advertisement Portal",
          text: "A free advertisement channel.",
          github: "https://business-advertisement-portal.herokuapp.com/",
          application: "https://github.com/prabhm512/business-advertisement-portal"
        },
      ]
    }
  //Render on the screen
    render() {
      return (
        <article>
            <NavBar/>
            <div className="portfolio" id="portfolio">
            <div className="portfolio_container">
                        <h1>Portfolio <img src="../images/git.webp" alt="vscode" className="git"/></h1>
                        <div className="portfolio_projects">
                        <Project results={this.state.projects}/>
                                <br/><br/>
                                <a href="https://github.com/felipesqf" target="_blank" className="btn" id="see">See More here</a>
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
