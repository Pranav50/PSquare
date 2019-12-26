
import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Content, Grid} from 'react-mdl'
import Logo from '../src/img/psquare.png';
import ScrollspyNav from "react-scrollspy-nav";
import { bubble as Menu } from 'react-burger-menu'
import $ from 'jquery'
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';

var styles = {
    bmBurgerButton: {
      position: 'sticky',
      width: '36px',
      height: '30px',
    },
    bmBurgerBars: {
      background: '#0984e3'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      marginRight:'-22px'
    },
    bmCross: {
      background: '#e84118',
      outline:'none'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '70%',
      width:'200px',
      top:'27px'
    },
    bmMenu: {
      padding: '0.2em 4.8em 2em 0em',
      fontSize: '1.65em',
      outline:'none'
    },
    bmMorphShape: {
      fill: '#30336b',
      opacity:'0.9'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '2.3em',
      width:'110%'
    },
    bmItem: {
      display: 'inline-block',
      marginBottom:'35px',
      outline:'none',
      transition:'0.3s'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

class App extends Component {

  componentDidMount = () => {
    $('.menu a').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      });

    $('.burger a').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      });

      $(".burger a[href*='#']:not([href='#'])").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top - 55;
      
        $("body, html").animate({
          scrollTop: position
        }, 1000, 'linear' );
      });

    }

  render() {
    return (
      <div className="app-body">
    <Layout fixedHeader>
    <Header transparent className="header-color" 
        title={
            <Link to="/" style={{marginLeft:'-30px'}}>
                <img src={Logo} height="75em" width="128em" alt=""/>
            </Link>} scroll style={{position:'fixed'}}>
            <ScrollspyNav
            scrollTargetIds={["section_1", "section_2", "section_3", "section_4"]}
            offset={1}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
        >
            <div className="menu">
                <a href="#"><span>Home</span></a>
                <a href="#section_1"><span>Projects</span></a>
                <a href="#section_2"><span>Resume</span></a>
                <a href="#section_3"><span>About Me</span></a>
                <a href="#section_4"><span>Contact</span></a>
            </div>
            
        </ScrollspyNav>
        
            <div className="burger" style={{marginBottom:'2em', marginRight:'-3em'}}>
            <Menu right styles={styles} noOverlay>
              <a href="#">Home</a>
              <a href="#section_1">Projects</a>
              <a href="#section_2">Resume</a>
              <a href="#section_3">About Me</a>
              <a href="#section_4">Contact</a> 
          </Menu>
            </div>           
            </Header> 
             
</Layout> 
                    <Content style={{width:'100%'}}>
                    <Grid style={{width:'auto', padding:'0px'}}>
                    <LandingPage/></Grid>
                    <Grid id="section_1" style={{width:'auto',  padding:'0px'}}>
                    <Projects/></Grid>
                    <Grid id="section_2" style={{width:'auto', padding:'0px'}}>
                    <Resume/></Grid>
                    <Grid id="section_3" style={{width:'auto', padding:'0px'}}>
                    <AboutMe/></Grid>
                    <Grid id="section_4" style={{width:'auto', padding:'0px'}}>
                    <Contact/></Grid>
                    <Footer/>
                    </Content>

</div>
    )
  }
}

export default App