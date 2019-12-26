import React, { Component } from 'react'
import { Grid, Cell } from "react-mdl";

export class Education extends Component {
    render() {
        return (
            <Grid  style={{fontFamily:'Muli', marginBottom:'-2em'}}>
                <Cell col={4}>
                <b>{this.props.school}</b>
                </Cell>
                <Cell col={8}>
                <p>{this.props.schoolName}</p> 
                </Cell>
            </Grid> 
        )
    }
}

export default Education
