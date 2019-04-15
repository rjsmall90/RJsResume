import React, { Component } from 'react';

export class About extends Component {
    render() {
      return (
        <React.Fragment>
        <div id="about">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>About</h5>
              <h1>Let me introduce myself.</h1>
              <div className="intro-info">
                <img src="images/RSmallProfile.jpg" alt="Profile" />
                <p className="lead">I'm an all-around creative, who was raised and cultivated in the burgeoning technology era! Currently searching for a company who could benefit from my years of experience, and am open for any work you may need, be it web or graphic design! View my page, learn more about me, and reach out should you feel compelled!</p>
              </div>   			
            </div>   		
          </div> {/* /section-intro */}

          <div className="row about-content">
            <div className="col-six tab-full">
              <h3>Profile</h3>
              <p>Software Developer/Graphic Designer with over 9 years of customer service experience, including 7 years' experience in the financial industry. Recognized for strong leadership and project management skills. Multiple freelance projects done over the course of 10 years. </p>
              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>Ryan Small</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>December 2nd</span>
                </li>
                <li>
                  <strong>Job:</strong>
                  <span>Freelancer, Full-Stack Developer, Graphic Artist</span>
                </li>
                <li>
                  <strong>Website:</strong>
                  <span>www.github.com/rjsmall90</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>rjsmall90@gmail.com</span>
                </li>
              </ul> {/* /info-list */}
            </div>
            <div className="col-six tab-full">

              <h3>Programming Languages/Frameworks Used</h3>
              <p>A collection of programming languages and frameworks that I've studied and have personally created projects in. </p>
              <ul className="skill-bars">
                <li>
                  <div className="progress percent90"><span>90%</span></div>
                  <strong>Java</strong>
                </li>
                <li>
                  <div className="progress percent75"><span>73%</span></div>
                  <strong>JavaScript/TypeScript</strong>
                </li>
                <li>
                  <div className="progress percent35"><span>35%</span></div>
                  <strong>Python</strong>
                </li>
                <li>
                  <div className="progress percent95"><span>95%</span></div>
                  <strong>HTML</strong>
                </li>
                <li>
                  <div className="progress percent70"><span>70%</span></div>
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className="progress percent65"><span>68%</span></div>
                  <strong>Spring</strong>
                </li>
                <li>
                  <div className="progress percent65"><span>65%</span></div>
                  <strong>Angular6</strong>
                </li>
                <li>
                  <div className="progress percent80"><span>80%</span></div>
                  <strong>Ionic3</strong>
                </li>
                <li>
                  <div className="progress percent80"><span>81%</span></div>
                  <strong>React</strong>
                </li>
              </ul> {/* /skill-bars */}		
            </div>
          {/* </div> */}
          <div className="col-six tab-full">
              <h3>Add'l Skills</h3>
              {/* <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p> */}
              <ul className="skill-bars">
                <li>
                  <div className="progress percent90"><span>90%</span></div>
                  <strong>Adobe Creative Suite</strong>
                </li>
                <li>
                  <div className="progress percent95"><span>95%</span></div>
                  <strong>Leadership</strong>
                </li>
              </ul> {/* /skill-bars */}		
            </div>
            </div>
          
          {/* <div className="row button-section">
            <div className="col-twelve">
              <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
              <a href="#" title="Download CV" className="button button-primary">Download CV</a>
            </div>   		
          </div> */}
        </div>
        </React.Fragment>

      );
    }
}
  

  export default About