import React, { Component } from "react";
import './about.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import Profile from "../components/ProfilePic";


class About extends Component {
  //Render on the screen
    render() {
      return (
        <article>
          <NavBar/ >
            <section className="main_section" id="main">
                    <div className="main_container">
                        <h1>Hi, I am Felipe!</h1><hr/>
                        <div className="main_content">
                            <section className="main_text">
                                <h3>Full Stack Developer|DevOps and BA living in Sydney</h3>
                                <p> ●	Qualified Developer, DevOps and Cloud Engineer looking for a role where I can apply my skills. 
                                  Experienced SAP Business Analyst with 8 years of experience as SAP Business Analyst working with Financials 
                                  and Real Estate modules defining and developing solutions which deliver value to customers and business stakeholders.</p><br></br>
                                  <h4>Technologies and skills:</h4>       
                                    <p>• Docker, IaC, AWS, CI/CD, GIT, S/4HANA, SAP REFX, SAP Financials, SAP ABAP, Salesforce, Sitecore and Data Migration.<br></br>
                                      • Languages, application, and frameworks: HTML, CSS, JavaScript, React.js, jQuery, JSON, AJAX, Serverless framework. Node.js, Express.js, Web3, Handlebars, GIT, ABAP and others.<br></br>
                                      • AWS Resources (VPC, EC2, EIPs, ALB, ASG, Route53, RDS, EFS, ECS, Lambda)<br></br>
                                      • Infrastructure as Code: Terraform and CloudFormation.<br></br>
                                      • CI/CD: Gitlab CICD, TravisCI, Github Actions, AWS CodePipeline<br></br>
                                      • Database platforms based on SQL such as MySQL and Aurora, NoSQL DBs such as MongoDB and DynamoDB and ORM (Sequelize, Mongoose).<br></br>
                                      </p>                
                                    <Resume/>                                 
                                
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
