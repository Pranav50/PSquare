import React, { Component } from 'react'
import { MDBContainer,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import {data2} from '../data/data.js'
import '../App.css'

export default class Projects extends Component { 
  
    render() {
      const disabled = true
        return (
      <div className="project-body"> 
      <p className="font-weight-bold" className="project-title">Projects</p>
       <MDBContainer>
      <MDBRow >      
      {  
        data2.map((data, index) => {
          console.log('DATA', data)
          return <MDBCol key={index} md="12" lg="6" >
          <MDBCard style={{ width: '100%'}}>
          <Link to={{ pathname: `/details/${data.id}`, data:data }} style={{...(data.disabled ? {pointerEvents: 'none'} : {pointerEvents: 'auto'})}}>
          <img className="img-fluid" src={data.img}
          style={{height:'20rem', width:'40rem'}}
          
          />
          </Link>
          <MDBCardBody>
            <MDBCardTitle style={{color:'black'}}>{data.title}</MDBCardTitle>
            <hr/>
            
            <div style={{width:'100%', display:'inline-block', marginLeft:'-1%'}}>
            <span style={{float:'left'}}>
            <MDBCardText>
            {data.content}
            </MDBCardText>
            </span>
            <span style={{float: 'right'}}>
            <img src={data.logo} height="28px" />
            </span>
            {/*  */}
            </div>
            <div className="dev-text">
              <MDBCardText><b>Development:</b><span style={{marginLeft:'2%'}}>{data.dev}</span></MDBCardText>
            </div>
            <div style={{width:'100%', display:'inline-block', marginLeft:'-1%'}}>
            <Button variant="info" href={data.github} target="_blank" style={{float:'left'}} disabled={data.disabled ? true : ''}>Github</Button>
            <Button variant="info" href={data.demo} target="_blank" style={{float:'right'}} disabled={data.disabled ? true : ''}>Demo</Button>
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
