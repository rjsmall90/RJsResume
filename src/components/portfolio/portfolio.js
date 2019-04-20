import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea'; 

export class Portfolio extends Component {
        render() {
          return (
            <React.Fragment>
            <div id ="portfolio">
              <div className="row section-intro">
                <div className="col m4">
                  <h5>Portfolio</h5>
                  <h1>Check Out Some of My Work!</h1>
                  <p className="lead">A collection of some of my recent projects, web applications, and designs</p>
                <div className="row services-content">
                  <div className="cards-alignment">
                  <Card id="service-content" className="cards">
                    <CardActionArea target ="_blank" href="https://www.github.com/rjsmall90/rjsresume">
                    <CardMedia class="cards-media">
                      <img src="images/Rsmall.jpg"></img>
                    </CardMedia>
                    <h2>Resume/Portfolio Site</h2>
                    <CardContent>
                    <p>first foray into React; built portfolio/resume site using JSX and the React libraries. First time registering domain and publishing site using AWS & S3 cloud services.</p> 
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card className="cards">
                    <CardActionArea target="_blank" href="https://github.com/rjsmall90/spitball">
                    <CardMedia className="cards-media">
                      <img src="images/final_spitball.jpg"></img>
                    </CardMedia>
                    <h2>Project Spitball</h2>
                    <CardContent className="cards-content">
                    <p>Teacher Rating Service/Social Media. In order to learn how to build a web applicaton from top to bottom: using Java, JavaScript, Spring/SpringBoot, MySQL, & Ionic 3 built a web application using MVC design concepts. The application is designed to allow users to rate their teachers per school and district.</p> 
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card className="cards">
                    <CardActionArea target="_blank" href="https://github.com/rjsmall90/JavaJawn">
                    <CardMedia className="cards-media">
                      <img src="images/java_logo.jpg"></img>
                    </CardMedia>
                    <h2>JavaJawn</h2>
                    <CardContent className="cards-content">
                    <p>using Java, Spring/SpringBoot, & PostgreSQL, built a functioning, full-stack scheduling application to better learn the Spring MVC design pattern and using React for the front-end.</p> 
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  <div className="cards">
                    <div className = "cards-action-area" target="_blank" href="https://github.com/rjsmall90/FoodReyes">
                    <div className="cards-media">
                      <img src="images/menu.jpg" className="card-media"></img>
                      <span class="cards-title">FoodReyes</span>                    
                    </div> {/*end of card-media*/}
                      <div className="cards-content">
                    <p>-touch screen application for registering inventory and purchasing products. Through collaboration-using Java, Spring/SpringBoot, & React , building an inventory and purchasing mobile application</p> 
                    </div> {/*end of card-content*/}
                    </div> {/*end of card-action*/}
                  </div> {/*end of card*/}
                  <Card className="cards">
                    <CardActionArea target="_blank" href="https://www.medium.com/@rjsmall90">
                    <CardMedia className="cards-media">
                      <img src="images/medium.jpg"></img>
                    </CardMedia>
                    <h2>Check Out My Blogs on Medium!</h2>
                    <CardContent>
                    <p>A series of blogs, authored by me, as a means of testing my knowledge, educating myself, and readers on different computer science and software topics.</p> 
                    </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
               </div> 
               </div>
               </div>
              </div> {/* /section-intro*/} 
            </React.Fragment>
          );
        }
    };
        export default Portfolio 
