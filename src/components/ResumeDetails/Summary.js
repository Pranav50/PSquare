import React, { Component } from 'react'
import starImage from '../../img/bullet3.png'

export class Summary extends Component {  
    render() {
        return (
            <div>
            <section>
            <ul className="extras5"> 
            <li><img src={starImage} height="8%" width="8%" style={{float:'left',  marginTop:'1.5%'}} />
              <p>I have overall 1.8 years of experience as a Front-End Web Developer</p>
            </li>
            <li><img src={starImage} height="8%" width="8%" style={{float:'left', marginTop:'1.5%'}} />
              <p>10 months of extensive experience in React.js</p>
            </li>
            <li><img src={starImage} height="8%" width="8%" style={{float:'left',  marginTop:'1.5%'}} />
              <p>Extensively used HTML/CSS, JavaScript, Bootstrap, Material UI, MDBReact</p>
            </li>
            <li><img src={starImage} height="8%" width="8%" style={{float:'left',  marginTop:'1.5%'}} />
              <p>Experience in MERN Stack development</p>
            </li>
            <li><img src={starImage} height="8%" width="8%" style={{float:'left',  marginTop:'1.5%'}} />
              <p>Expertise in React JS framework to develop the SPA (Single Page Application)</p> 
            </li>
            <li><img src={starImage} height="8%" width="8%" style={{float:'left',  marginTop:'1.5%'}} />
              <p>Able to write application level code to interact with APIs and JSON Data</p>
            </li>
          </ul>
            </section>
            </div>
        )
    }
}

export default Summary
