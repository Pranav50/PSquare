import React, { Component } from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import { Objective } from './ResumeDetails/Objective';
import TechnicalSkills from './ResumeDetails/TechnicalSkills';
import Experience from './ResumeDetails/Experience';
import Education from './ResumeDetails/Education'; 
import Summary from './ResumeDetails/Summary';
import Certifications from './ResumeDetails/Certifications';
import AcademicProjects from './ResumeDetails/AcademicProjects';
import Languages from './ResumeDetails/Languages';


export default class Resume extends Component {
    render() {
        return (
            <div className="resume-body">
            <p className="font-weight-bold" className="resume-title">Resume</p>
            <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol className="text-white py-5 px-4 my-5" style={{ backgroundImage: `url(https://www.elsetge.cat/myimg/f/14-141878_red-an-orange-gradient-abstract-wallpaper-image-red.jpg)` }}>

                  <MDBJumbotron fluid style={{boxShadow: '0 10px 10px -5px #1e272e', background:'#f1f2f6'}}>
                  <MDBContainer>
                  <MDBRow style={{margin:'0 2px 0 2px'}}>
                      <MDBCol md="5" style={{color:'black', border:'1px solid black'}}>
                        <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Objective</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <Objective/>
                        <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Summary</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <Summary/>
                        <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Certifications</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <Certifications/>
                        <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Academic Projects</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <AcademicProjects/>
                        <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Education</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <Education
                          school="S.S.C"
                          schoolName="Children's Academy, Mumbai"
                        />
                        <Education
                          school="H.S.C"
                          schoolName="Gokhale Science College, Mumbai"
                        />
                        <Education
                          school="B.E.I.T"
                          schoolName="Mumbai University, Mumbai"
                        />
                        <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Languages Known</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <Languages/>
                </MDBCol>
                      <MDBCol md="7" style={{color:'black', border:'1px solid black'}}>
                      <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Technical Skills</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <TechnicalSkills/>
                      <h4 style={{fontFamily:'Oxygen', color:'#8395a7'}}>Experience</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <Experience/>
                      </MDBCol> 


                  </MDBRow>
                    
                  </MDBContainer>
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
