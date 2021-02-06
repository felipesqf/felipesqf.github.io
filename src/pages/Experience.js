import React, { Component } from "react";
import './experience.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import Resume from "../components/Resume";
// import Profile from "../components/ProfilePic";



class Experience extends Component {
  //Render on the screen
    render() {
      return (
        <article>
                <section class="experience_container">
                    <div><h1>Education and Experience</h1></div>
                    <div class="experience_grid">
                        <div class="experience_left">
                        <img src="https://github.com/felipesqf/felipesqf.github.io/blob/master/public/images/code.jpg?raw=true" alt="code" class="codeimage" />
                        </div>
                            <div class="experience_right">
                            <div class="experience_content">
                                <div class="experience_desc">
                                    <h2>Education, Certificaions, Badges and Courses</h2>
                                    <p>University Estacio UniRadial, Sao Paulo, Brazil<br/>
                                        ●	Technology Degree in Analysis and Systems Development<br/>
                                    Nortwest, Sydney, Australia<br/>
                                        ●	Diploma of Information Technology - Web Development (In progress)<br/>
                                    University of Sydney and Trilogy Education, Sydney, Australia<br/>
                                        ●	Full Stack Developer Coding Bootcamp (In progress)<br/>
                                        ●	AWS Certified Cloud Practitioner<br/>
                                        ●	SAP ABAP/4 Programmer Advanced<br/>
                                    ●	UX400 - UI Development with SAPUI5</p><br/>
                                    <h2>Experience</h2>
                                    <p>
                                        ●	Deloitte Australia - SAP REFX Consultant - 08-2017 - present<br/>
                                        ●	Grupo Assa - Specialist Senior (SAP FI REFX Consultant) - Aug-2015 - Jul-2016<br/>
                                        ●	Abaco Consultores - IT Consultant (SAP FI REFX Consultant) - Jun-2014 - Sep-2015<br/>
                                        ●	Indra Company - SAP Consultant (SAP FI REFX Consultant) - Jan-2013 - Jun-2014<br/>
                                        </p><br/><br/><br/>

                                    <Resume/>
                                    <a href="/" class="btn">About</a>
                                    <a href="/portfolio" class="btn">Portfolio</a>
                                    <a href="/contact" class="btn">Contact</a>
                                </div>
                            </div>
                            </div>
                            </div>
                        </section>
                    <Bar/>
            <Footer/>
        </article>
      );
    }
  }
  
  export default Experience;
