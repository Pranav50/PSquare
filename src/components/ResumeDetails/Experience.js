import React, { Component } from 'react'
import { Grid, Cell } from "react-mdl";
import bulletImage from '../../img/bullet4.png'

export class Experience extends Component {
    render() {
        return (
            <Grid  style={{fontFamily:'Muli', marginBottom:'-2em'}}>
                <Cell col={4}>
                <b>Mar 2018 - Jul 2018</b>
                </Cell>
                <Cell col={8} style={{marginTop:'-3.5%'}}>
                <h5>Angular Developer</h5>
                <p className="lead">Synergy Technology Solutions</p>
                <ul className="extras4"> 
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left',marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Worked as a Front-end Developer in Angular 4</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Also worked in Ionic Mobile Project</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Responsible for removing minor bugs from main project</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Delivering a complete front-end app and ensuring high performance</p>
                    </li>
                </ul>
                </Cell>

                <Cell col={4}>
                <b>Oct 2018 - Nov 2018</b> 
                </Cell>
                <Cell col={8} style={{marginTop:'-3.5%'}}>
                <h5>Angular Developer</h5>
                <ul className="extras4"> 
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left',marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Developed Weather Application from scratch</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Data retrieved from JSON</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Built with Angular 4 and Angular Material</p>
                    </li>
                </ul>
                </Cell>

                <Cell col={4}> 
                <b>Dec 2018 - Mar 2019</b>
                </Cell>
                <Cell col={8} style={{marginTop:'-3.5%'}}>
                <h5>Angular Developer</h5>
                <ul className="extras4"> 
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left',marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Developed an ECommerce Application from scratch</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>A complete revamp of Mosh Hamedani Angular4 ECommerce project</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Challenging task of converting Angular4 to Angular6</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Firebase as database and MDBAngular as CSS framework</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Project brimmed with Sorting, Searching, Pagination etc</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Payment method enabled</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Enhancements like Transitions, Router Animation and Smooth Scroll Effect</p>
                    </li>
                </ul>
                </Cell>

                <Cell col={4}>
                <b>Apr 2019 - Jul 2019</b>
                </Cell>
                <Cell col={8} style={{marginTop:'-3.5%'}}>
                <h5>React Developer</h5>
                <p className="lead">Developed 5 Projects</p>
                <ul className="extras4"> 
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left',marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Beach Resort</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Image Finder</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Lyrics Finder</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>MShop</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Slack Clone</p>
                    </li>
                </ul>
                </Cell>

                <Cell col={4}>
                <b>Aug 2019 - Dec 2019</b>
                </Cell>
                <Cell col={8} style={{marginTop:'-3.5%'}}>
                <h5>React Developer</h5>
                <p className="lead">Developed 7 Projects</p>
                <ul className="extras4"> 
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left',marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>ToDo List</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>ToDo List Firebase</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Movie Finder</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>ToDo List MERN Stack</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Youtube Clone</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>Weather App</p>
                    </li>
                    <li><img src={bulletImage} height="4.5%" width="4.5%" style={{float:'left', marginTop:'1%', marginRight:'0.3rem'}} />
                    <p>ECommerce with MongoDB</p>
                    </li>
                </ul>
                </Cell>
            </Grid> 
        )
    }
}

export default Experience
