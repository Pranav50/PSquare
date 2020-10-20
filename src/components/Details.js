import React, { Component } from 'react'
import { Layout, Header} from 'react-mdl'
import { MDBContainer,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import { MDBJumbotron} from "mdbreact";
import Logo from '../img/psquare.png';
import starImage from '../img/drop.png'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {Text } from 'gestalt'

import '../App.css' 

export default class Details extends Component {  
    state = {
        data: this.props.location.data ? this.props.location.data:JSON.parse(localStorage.getItem('object'))
      }

    componentDidMount() {
        if(this.props.location.data!==undefined)
        localStorage.setItem("object", JSON.stringify(this.props.location.data));
      }
    render() {
        const {data} =this.state;
        let title = data ? data.title : "";
        let img = data ? data.img : "";
        let desc = data ? data.desc :"";
        let demo = data ? data.demo :"";
        let extras = data ? data.extras :"";
        let tech = data ? data.tech :"";
        return (
            <Layout fixedHeader>
            <Header transparent className="header-color" 
                title={
                    <Link to="/" style={{marginLeft:'-30px'}}>
                        <img src={Logo} height="75em" width="128em" alt=""/>
                    </Link>} scroll style={{position:'fixed'}}>           
            </Header>
            <div className="details-body">
                <h4 className="details-title">{title}</h4>
                <MDBContainer>
                <MDBRow >      
                    <MDBCol>
                        <MDBCard className="card-image" style={{boxShadow:'0 10px 10px -2px #1e272e'}}>
                        <img className="img-fluid" src={img} style={{height:'auto', width:'auto'}}/>
                        </MDBCard>
                    </MDBCol> 
                </MDBRow>
                <MDBRow>
                <MDBCol>

                <MDBJumbotron style={{ padding: 0, marginTop:'-4.8em'}}>
            <MDBCol className="text-white py-5 px-4 my-5" 
            style={{ background: 'linear-gradient(to right, #0abde3, #c7ecee, #dff9fb)'}}>
            <MDBContainer >
            <MDBJumbotron fluid className="jumbotron-banner"
            style={{borderRadius:'10px', boxShadow:'0 10px 10px -5px #1e272e'}}>
              <h3 className="lead" className="text-center" 
              style={{color:'#dfe4ea', fontFamily:'Raleway', marginTop:'-10px'}}>
              {desc}
              </h3>
              <section>
                <ul className="extras"> 
                {extras.map((item, index) => {
                    return <li key={index}>
                    <img src={starImage} height="10%" width="10%" /> 
                    {item}
                    </li>
                })}
                </ul>
                </section>
                <h4 className="lead" className="text-center" 
                style={{color:'#dfe4ea', fontFamily:'Raleway', marginTop:'-10px'}}>
                Technology Used
                </h4>
                <section> 
                  <ul className="extras"> 
                  {tech.map((item, index) => {
                      return <li key={index}>
                      <img src={starImage} height="10%" width="10%" /> 
                      {item}
                      </li>
                  })}
                  </ul>
                  </section>
                  
                  <Button variant="info" className="btn2" color="light-blue"
                  style={{marginLeft:'25%', marginTop:'5%'}} href={demo} target="_blank">
                  <Text color="pine" size="xl">Live Demo</Text> 
                  </Button>

              </MDBJumbotron> 
              
            </MDBContainer>
            
            
            </MDBCol>
            
            </MDBJumbotron>
            
            
        </MDBCol>
        
    </MDBRow>
    
    </MDBContainer> 
     
    </div>      
</Layout>

)
    }
}
