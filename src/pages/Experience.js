import React, { Component } from "react";
import './experience.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import Resume from "../components/Resume";
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
// import Profile from "../components/ProfilePic";



class Experience extends Component {
  //Render on the screen
    render() {
      return (
        <article>
            <NavBar/>
                <section class="experience_container">
                    <div><h1>Education and Experience</h1></div>
                    <div class="experience_grid">
                        <div class="experience_left">
                        <img src="./images/code.jpg" alt="code.jpg" class="codeimage" />
                        </div>
                            <div class="experience_right">
                            <div class="experience_content">
                                <div class="experience_desc">
                                    <h2>Education, Certificaions, Badges and Courses</h2>
                                    <p>
                                        ●	Technology Degree in Analysis and Systems Development<br/>
                                        ●	Full Stack Developer Coding Bootcamp - (A+) - University of Sydney <br/>
                                        ●	Diploma of Information Technology - Web Development (In progress)<br/>
                                        ●	AWS Certified Developer Associate<br/>
                                        ●	AWS Certified SysOps Administrator Associate<br/>
                                        ●	AWS Certified Cloud Practitioner<br/>
                                        ●	AWS Certified Solutions Architect Associate<br/>
                                        ●	HashiCorp Certified: Terraform Associate<br/>
                                        ●	GitLab Certified Associate<br/>
                                        ●	GitLab Certified CI/CD Specialist<br/>
                                        ●	SAP ABAP/4 Programmer Advanced<br/>
                                        </p>

                                    <h2>Experience</h2>
                                    <p>
                                        ●	Deloitte Australia - SAP REFX Consultant - 08-2017 - present<br/>
                                        ●	Grupo Assa - Specialist Senior (SAP FI REFX Consultant) - Aug-2015 - Jul-2016<br/>
                                        ●	Abaco Consultores - IT Consultant (SAP FI REFX Consultant) - Jun-2014 - Sep-2015<br/>
                                        ●	Indra Company - SAP Consultant (SAP FI REFX Consultant) - Jan-2013 - Jun-2014<br/>
                                        ●	Computer Science Corporation (SAP FI REFX System Analyst) - Sep-2011 - Nov-2012<br/>
                                        </p><br/><br/>

                                    <Resume/>
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
