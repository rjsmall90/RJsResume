import React, { Component } from 'react';

export class Contact extends Component {

    render() {
          return (
            <div id ="contact">
              <div className="row section-intro">
                <div className="col-twelve">
                  <h5>Contact</h5>
                  <h1>I'd Love To Hear From You.</h1>
              <div className="row contact-info">
                <div className="col-four tab-full">
                  <div className="icon">
                    <i className="icon-pin" />
                  </div>
                  <h5>Where to find me</h5>
                  <p>
                    Wilmington, DE<br />
                    19806 US
                  </p>
                </div>
                <div className="col-four tab-full collapse">
                  <div className="icon">
                    <i className="icon-mail" />
                  </div>
                  <h5>Email Me @</h5>
                  <a href="mailto:rjsmall90@gmail.com">rjsmall90@gmail.com<br/></a>
                </div>
                <div className="col-four tab-full">
                  <div className="icon">
                    <i className="icon-phone" />
                  </div>
                  <h5>Call Me At</h5>
                  <p>(302) 613 1136<br />
                  </p>
                </div>
              </div> {/* /contact-info */}
            </div>
          </div>
        </div>

          );
        }
      };

      export default Contact
