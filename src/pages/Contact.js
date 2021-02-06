import React, { Component } from "react";
import './contact.css';
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import { Link } from 'react-router-dom'
// import Profile from "../components/ProfilePic";



class Contact extends Component {
  //Render on the screen
    render() {
      return (
        <article>
                    <section className="contact" id="contact">
                        <div className="contact_container">
                        <h1>Contact</h1>
                            <div className="contact_right">
                                <form className="form-group">
                                    <label>Please, leave me a message or contact me on social medias bellow.</label><br/><br/>
                                    <label for="Name">Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="exampleInputPassword1"/>
                                    <label>Message</label>
                                    <textarea className="form-control" id="validationTextarea"></textarea>
                                    <button type="button" className="btn">Submit</button>
                                </form>
                            </div>
                            <br/><br/>
                            <div className="links">
                                <Link to="/experience" className="btn">Experience</Link>
                                <Link to="/" className="btn">About</Link>
                                <Link to="/portfolio" className="btn">Portfolio</Link>
                            </div>
                        </div>
                    </section>
                    <Bar/>
            <Footer/>
        </article>
      );
    }
  }
  
  export default Contact;
