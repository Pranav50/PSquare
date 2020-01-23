import React, { Component } from 'react'
import { MDBJumbotron, MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import phone from '../img/phone.png'
import email from '../img/email.png'
import address from '../img/home.png'
import skype from '../img/skype.png'
import {Grid, Cell} from 'react-mdl'

export default class Contact extends Component { 
    render() {
        return (
            <div className="contact-body2">
            <p className="font-weight-bold" className="contact-title">Contact</p>
            <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}> 
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-1">
                <MDBListGroup style={{ width: '100%', boxShadow: '0 10px 10px -5px #1e272e'}} className="icons" >
                  <MDBListGroupItem 
                  className="d-flex justify-content-between align-items-center"
                  style={{background:'#ffffff', opacity:'0.95'}}>
                  <img src={phone} />
                  <h4 style={{color:'#34495e',fontFamily:'Muli, sans-serif'}}>For contact please send me email</h4>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center"
                  style={{background:'#ffffff', opacity:'0.95'}}>
                  <img src={email} /><h4 style={{color:'#34495e',fontFamily:'Muli, sans-serif'}}>pranavpwr815@gmail.com</h4>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center"
                  style={{background:'#ffffff', opacity:'0.95'}}>
                  <img src={skype} /><h4 style={{color:'#34495e',fontFamily:'Muli, sans-serif'}}>live:pranavpwr815</h4>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center"
                  style={{background:'#ffffff', opacity:'0.95'}}>
                  <img src={address} /><h4 style={{color:'#34495e',fontFamily:'Muli, sans-serif'}}>Dindoshi, Mumbai</h4>
                  </MDBListGroupItem>
                </MDBListGroup>
            </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            </div>
        )
    }
}