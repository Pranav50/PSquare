import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../App.css'

export default class Footer extends Component {  

    render() {
        return (
         <div>
            
    <MDBFooter color="blue" className="font-small pt-1 mt-1">
    
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid color="blue">
        Copyright &copy; {new Date().getFullYear()} PSquare
      </MDBContainer>
    </div>
  </MDBFooter>
         </div> 

)
    }
}
