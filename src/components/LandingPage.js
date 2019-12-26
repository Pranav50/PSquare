import React, { Component } from 'react'
import { Grid, Cell, Layout } from 'react-mdl';
import Pranav from '../img/Pranav_new2.png';
import { MDBJumbotron, MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import github from '../img/github2.png';
import linkedin  from '../img/linkedin.png';  
import '../App.css';

export default class LandingPage extends Component {
    render() {
        return ( 
            
                <Grid className="landing-grid"> 
                    <Cell col={12}>
                    <img className="avatar-img"
                    src={Pranav} alt=""/>
                    <h3 style={{color:'#0a3d62'}}>Pranav Pawar</h3>
                    <div className="banner-text">
                        <h1 className="glow">Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | React | JavaScript | Node JS | MongoDB | Firebase</p>
                        
                  <MDBListGroupItem 
                  className="d-flex justify-content-center align-items-center"
                  style={{background:'none',border:'none'}}>
                  <a href="https://github.com/Pranav50" target="_blank">
                            <img src={github} height="180%" width="55%" alt=""/>
                  </a>
                  <a href="https://www.linkedin.com/in/pranav-pawar-661b9838/" target="_blank">
                            <img src={linkedin} height="180%" width="55%" alt=""/>
                  </a>
                  </MDBListGroupItem>

                        {/* <div className="social-links">
                            <Grid>
                            <a href="https://github.com/Pranav50" rel="noopener noreferrer" target="_blank">
                            <img src={github} height="180%" width="55%" style={{marginTop:'-15px'}} alt=""/>
                            </a>
                            </Grid>
                            <Grid>
                            <a href="https://www.linkedin.com/in/pranav-pawar-661b9838/" rel="noopener noreferrer" target="_blank">
                            <img src={linkedin} height="180%" width="55%" style={{marginTop:'-15px'}} alt=""/>
                            </a> 
                            </Grid>
                        </div> */}
                    </div>
                    </Cell>
    </Grid>
    
        )
    }
}