import React, { Component } from 'react';

export class Home extends Component {

        render() {
          return (
            <div id ="intro">
              <div className="intro-overlay" />	
              <div className="intro-content">
                <div className="row">
                  <div className="col-twelve">
                    <h5>Welcome to Small Wrld,</h5>
                    <h1>I'm Ryan Small.</h1>
                    <p className="intro-position">
                      <span>Full-Stack Developer</span>
                      <span>Graphic Artist</span>
                    </p>
                    <a className="button stroke smoothscroll" href="#about" title>More About Me</a>
                  </div>  
                </div>   		 		
              </div>
    </div> 
              /* <ul className="intro-social">        
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
              </ul> /intro-social */
            
          );
        }
      
    };

    export default Home