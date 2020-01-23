import React, { Component } from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";

export class TechnicalSkills extends Component {
    render() {
        return (
            
                  <MDBContainer style={{fontFamily:'Muli'}}>
                  <MDBRow style={{margin:'0 2px 0 2px'}}>
                      <MDBCol md="5" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        <b>Web Technologies</b>
                      </MDBCol>
                      <MDBCol md="7" className="text-justify" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        HTML5, CSS3, JavaScript (ES6), GraphQL, jQuery
                      </MDBCol>
                  </MDBRow>
                  <MDBRow style={{margin:'0 2px 0 2px'}}>
                      <MDBCol md="5"  style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        <b>Libraries</b>
                      </MDBCol>
                      <MDBCol md="7" className="text-justify" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        React, Redux - Thunk/Saga, Redux Form, Redux Selector,
                        Flux
                        <hr/>
                         Bootstrap, MDBReact, React MDL, Material UI 
                      </MDBCol>
                  </MDBRow>
                  <MDBRow style={{margin:'0 2px 0 2px'}}>
                      <MDBCol md="5" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        <b>Backend/Middleware Libraries</b>
                      </MDBCol>
                      <MDBCol md="7" className="text-justify" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        MongoDB, Node.js, Firebase, Express, Mongoose
                      </MDBCol>
                  </MDBRow>
                  <MDBRow style={{margin:'0 2px 0 2px'}}>
                      <MDBCol md="5" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        <b>Build Tools</b>
                      </MDBCol>
                      <MDBCol md="7" className="text-justify" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        NPM, Babel, Webpack
                      </MDBCol>
                  </MDBRow>
                  <MDBRow style={{margin:'0 2px 0 2px'}}>
                      <MDBCol md="5" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        <b>Versioning Tools</b>
                      </MDBCol>
                      <MDBCol md="7" className="text-justify" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        Github, Gitlab
                      </MDBCol>
                  </MDBRow>
                  <MDBRow style={{margin:'0 2px 0 2px'}}>
                      <MDBCol md="5" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        <b>Host Servers</b>
                      </MDBCol>
                      <MDBCol md="7" className="text-justify" style={{color:'#222f3e', border:'1px solid #222f3e'}}>
                        Github Pages, Heroku, Netlify, AWS, Firebase
                      </MDBCol>
                  </MDBRow> 
                  </MDBContainer>
        )
    }
}

export default TechnicalSkills
