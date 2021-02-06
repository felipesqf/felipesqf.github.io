import React, { Component } from "react";
import './about.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import Resume from "../components/Resume";
import Profile from "../components/ProfilePic";
import { Link } from 'react-router-dom'

class About extends Component {
  //Render on the screen
    render() {
      return (
        <article>
            <section className="main_section" id="main">
                    <div className="main_container">
                        <h1>Hi, I am Felipe!</h1>
                        <div className="main_content">
                            <section className="main_text">
                                <h3>Full Stack Developer and Business Analyst living in Sydney</h3>
                                <p> ●	Over 10 years of experience in Information Technology, including 7 years on SAP as FI and REFX
                                    Consultant defining and developing solutions which deliver value to customers and business
                                    stakeholders. AWS Certified Cloud Practitioner, strong programming logic skills on SAP ABAP,
                                    analysis and debugging programs, creating reports, use of BAPIs, exits, tables, views and
                                    transactions, ALV, Bath Input and BRF+.</p>
                                    <p>●	Currently working to upskill my technical knowledge by studying a Full Stack Developer Coding
                                    bootcamp at Sydney University including the languages and libraries: HTML, CSS, JavaScript,
                                    jQuery, React, Node.js, Express.js, Handlebars, MySQL, Git and others.</p>       
                                    <p>●	Experience in designing SAP Finance (FI) and Real Estate (RE-FX) solutions, gathering
                                    requirements, writing test cases, executing integrated and unit tests and fixing incidents. Exposure
                                    to Salesforce, Sitecore and ALM.</p>                
                                    <Resume/>                                 
                                    <Link to="/experience" className="btn">Experience</Link>
                                    <Link to="/portfolio" className="btn">Portfolio</Link>
                                    <Link to="/contact" className="btn">Contact</Link>
                            </section>
                            <Profile/>
                        </div>
                    </div>
                    <Bar/>
             </section>
            <Footer/>
        </article>
      );
    }
  }
  
  export default About;
