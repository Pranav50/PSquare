import React, { Component } from 'react'
import { MDBBtn,MDBContainer,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import {Link} from 'react-router-dom';
import {data2} from '../data/data.js'
import '../App.css'

export default class Projects extends Component { 
  
    render() {
        return (
      <div className="project-body"> 
      <p className="font-weight-bold" className="project-title">Projects</p>
      <MDBContainer>
      <MDBRow >      
      {  
        data2.map((data, index) => {
          return <MDBCol key={index}>
          <MDBCard style={{ width: "30rem", borderRadius:'10px', boxShadow: '0 10px 6px -6px #1e272e'}}>
          <Link to={{ pathname: `/details/${data.id}`, data:data }}>
          <MDBCardImage className="img-fluid" src={data.img}
          waves style={{height:'auto', width:'auto'}}
          />
          </Link>
          <MDBCardBody>
            <MDBCardTitle style={{color:'black'}}>{data.title}</MDBCardTitle>
            <hr/>
            <MDBCardText>
            {data.content}
            </MDBCardText>
            <div className="dev-text">
              <MDBCardText><b>Development:</b><span style={{marginLeft:'2%'}}>{data.dev}</span></MDBCardText>
            </div>
            <div style={{width:'100%', display:'inline-block', marginLeft:'-1%'}}>
            <MDBBtn href={data.github} target="_blank" style={{float:'left'}}>Github</MDBBtn>
            <MDBBtn href={data.demo} target="_blank" style={{float:'right'}}>Demo</MDBBtn>
            </div>
          </MDBCardBody>
      </MDBCard>
      <br/>
      </MDBCol>
         
        })
      }
    </MDBRow>
    </MDBContainer>          
</div>
        )
    }
}
