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
            image:"../images/cryptohub.png",
            alt: "Crypto Hub",
            title: "Crypto Hub",
            text: "Track you crypto and portfolio",
            github: "https://github.com/felipesqf/Crypto-Hub",
            application: "https://crypto-hub-react.herokuapp.com/"
          },
        {
          image:"../images/bestrecommendation.PNG",
          alt: "Best Recommendations",
          title: "Best Recommendations",
          text: "Find the best recommendations here.",
          github: "https://github.com/DCLucas95/Project-1-Recommendations",
          application: "https://dclucas95.github.io/Project-1-Recommendations/"
        },
        {
          image:"../images/weather.png",
          alt: "weather",
          title: "Weather Dashboard",
          text: "Worrying if it's gonna rain? Check forecast here.",
          github: "https://github.com/felipesqf/Weather-Dashboard",
          application: "https://felipesqf.github.io/Weather-Dashboard/"
        },
        {
          image:"../images/workout.png",
          alt: "workday",
          title: "Workout Tracker",
          text: "Track your fitness goals here!",
          github: "https://github.com/felipesqf/Workout-Tracker",
          application: "https://agile-scrubland-26537.herokuapp.com/?id=5ff28a9c39a0678c5dab72ac"
        },
        {
          image:"../images/budget.png",
          alt: "budget",
          title: "Online/Offline Budget Tracker",
          text: "To keep the budget pon track.",
          github: "https://github.com/felipesqf/Online-Offline-Budget-Trackers",
          application: "https://rocky-journey-41488.herokuapp.com/"
        },
        {
          image:"../images/burger.png",
          alt: "burger app",
          title: "Burger - Express Handlebars",
          text: "Eat-Da-Burger! Check it out.",
          github: "https://github.com/felipesqf/Burger",
          application: "https://whispering-tor-94667.herokuapp.com/"
        },
        {
          image:"../images/business.png",
          alt: "BAP",
          title: "Business Advertisement Portal",
          text: "A free advertisement channel.",
          github: "https://github.com/prabhm512/business-advertisement-portal",
          application: "https://business-advertisement-portal.herokuapp.com/"
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
