import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export class Portfolio extends Component {
        render() {
          return (
            <React.Fragment>
            <div id ="portfolio">
              <div className="row section-intro">
                <div className="col-twelve">
                  <h5>Portfolio</h5>
                  <h1>Check Out Some of My Work!</h1>
                  <p className="lead">A collection of some of my recent projects, web applications, and designs</p>
                    <div className = "cards">
                  <Card>
                    <CardMedia>
                      <img src="images/Rsmall.jpg"></img>
                    </CardMedia>
                    <h2>Resume/Portfolio Site</h2>
                    <CardContent>
                    <p>first foray into React; built portfolio/resume site using JSX and the React libraries.</p> 
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia>
                      <img src="images/final_spitball.jpg"></img>
                    </CardMedia>
                    <h2>Project Spitball - Teacher Rating Service/Social Media</h2>
                    <CardContent>
                    <p>In order to learn how to build a web applicaton from top to bottom: using Java, JavaScript, Spring/SpringBoot, MySQL, & Ionic 3 built a web application using MVC design concepts. The application is designed to allow users to rate their teachers per school and district.</p> 
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia>
                      <img src="images/scala_logo.jpg"></img>
                    </CardMedia>
                    <h2>JavaJawn</h2>
                    <CardContent>
                    <p>using Scala, Spring/SpringBoot, & PostgreSQL, building a functioning scheduling application persisting server to learn Scala syntax. The goal is to build using TDD methodologies.</p> 
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia>
                      <img src="images/medium.jpg"></img>
                    </CardMedia>
                    <h2>Check Out My Blogs on Medium!</h2>
                    <CardContent>
                    <p>A series of blogs, authored by me, as a means of educating myself, and readers on different computer science and software topics.</p> 
                    </CardContent>
                  </Card>
                </div>
              </div> 
                
              </div> {/* /section-intro*/} 
            </div>
            </React.Fragment>
          );
        }
    };
        export default Portfolio 
