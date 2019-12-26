import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import AboutMe from './AboutMe'

function Main() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>  
    );
  }

export default Main


