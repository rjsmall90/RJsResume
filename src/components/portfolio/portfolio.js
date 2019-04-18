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
                <div className="col-twelve">
                  <h5>Portfolio</h5>
                  <h1>Check Out Some of My Work!</h1>
                  <p className="lead">A collection of some of my recent projects, web applications, and designs</p>
                <div>
                  <Card class="cards">
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
                    <h2>Project Spitball - Teacher Rating Service/Social Media</h2>
                    <CardContent>
                    <p>In order to learn how to build a web applicaton from top to bottom: using Java, JavaScript, Spring/SpringBoot, MySQL, & Ionic 3 built a web application using MVC design concepts. The application is designed to allow users to rate their teachers per school and district.</p> 
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card className="cards">
                    <CardActionArea target="_blank" href="https://github.com/rjsmall90/JavaJawn">
                    <CardMedia className="cards-media">
                      <img src="images/javalogo.jpg"></img>
                    </CardMedia>
                    <h2>JavaJawn</h2>
                    <CardContent>
                    <p>using Java, Spring/SpringBoot, & PostgreSQL, built a functioning, full-stack scheduling application to better learn the Spring MVC design pattern and using React for the front-end.</p> 
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  <Card className="cards">
                    <CardActionArea target="_blank" href="https://github.com/rjsmall90/FoodReyes">
                    <CardMedia className="card-media">
                      <img src="images/"></img>
                    </CardMedia>
                    <h2>FoodReyes-touch screen application for registering inventory and purchasing products</h2>
                    <CardContent>
                    <p>working with a partner-using Java, Spring/SpringBoot, & React , building a .</p> 
                    </CardContent>
                    </CardActionArea>
                  </Card>
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
                
              </div> {/* /section-intro*/} 
            </div>
            </React.Fragment>
          );
        }
    };
        export default Portfolio 
