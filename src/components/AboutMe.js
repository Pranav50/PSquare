 import React, { Component } from 'react'
import bulletImage from '../img/disc3.png'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import NowWhat from './NowWhat';

export default class AboutMe extends Component { 
    render() {
        return (
            <div className="aboutme-body">
            <p className="font-weight-bold" className="aboutme-title">About Me</p>
      <MDBContainer>
      <MDBRow>
        <MDBCol> 
          <MDBJumbotron style={{ padding: 0}}>
            <MDBCol className="py-5 px-4 my-5" style={{ backgroundImage: `url(https://images.wallpaperscraft.com/image/polygon_gradient_convex_132369_1920x1080.jpg)` }}>
            <MDBJumbotron fluid style={{boxShadow: '0 10px 10px -5px #1e272e', background:'#f1f2f6'}}>
            <ul className="extras3">  
            <li>
            <img className="aboutme-bullet" src={bulletImage} 
            height="3.1%" width="3.1%" 
            style={{float:'left', marginTop:'0.1%'}} />
              <p>I have experience working as part of a team and individually</p>
            </li>
            <li><img className="aboutme-bullet" src={bulletImage} height="3.1%" width="3.1%" style={{float:'left', marginTop:'0.1%'}} />
              <p>Intensive care in design and development of code</p>
            </li> 
            <li><img className="aboutme-bullet" src={bulletImage} height="3.1%" width="3.1%" style={{float:'left', marginTop:'0.1%'}} />
              <p>Hunger for new Technology and Trends</p>
            </li>
            <li><img className="aboutme-bullet" src={bulletImage} height="3.1%" width="3.1%" style={{float:'left', marginTop:'0.1%'}} />
              <p>Love for neat, clean and responsive CSS</p>
            </li>
            <li><img className="aboutme-bullet" src={bulletImage} height="3.1%" width="3.1%" style={{float:'left', marginTop:'0.1%'}} />
              <p>I am hardworking and dedicated in my work</p>
            </li>
            <li><img className="aboutme-bullet" src={bulletImage} height="3.1%" width="3.1%" style={{float:'left', marginTop:'0.1%'}} />
              <p>Applying innovative ideas in project</p>
            </li>
            <li><img className="aboutme-bullet" src={bulletImage} height="3.1%" width="3.1%" style={{float:'left', marginTop:'0.1%'}} />
              <p>Always connected to Github, StackOverflow, freeCodeCamp, Codepen</p>
            </li>
            <li><img className="aboutme-bullet" src={bulletImage} height="3.1%" width="3.1%" style={{float:'left', marginTop:'0.1%'}} />
              <p>Goal-oriented person</p>
            </li>
          </ul>
          <div style={{marginLeft:'5%'}}> 
          <h5 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Now What?</h5>
            <hr style={{borderTop:'3px solid #833fb2', width:'30%'}} />
            <NowWhat/>
          </div>
          </MDBJumbotron>
            </MDBCol> 
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
        )
    }
}
