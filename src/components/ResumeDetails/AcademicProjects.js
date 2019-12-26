import React, { Component } from 'react'

export class AcademicProjects extends Component {
    render() {
        return (
            <div style={{fontFamily:'Muli'}}>
            <h5>Trust Modelling in Social Tagging of 
            Multimedia Content</h5>
            <p className="lead">2015</p>
            <p className="text-justify">A social website which scans for the unwanted tags and filters it out.It thus ensures security of safely tagging on social media.The project was developed with 
              JSP as front end and SQL as back end. It also comprised of HTML and CSS</p>

            <h5>Online Shopping</h5>
            <p className="lead">2014</p>
            <p className="text-justify">A dynamic website that stores product information and could carry out various operations such as view cart, on-line payment,Add product, Delete product,Browse and Sort product.The GUI was made using HTML,CSS,JSP. 
            The business logic was made on Java Servlet. The Database was handled by Oracle</p>
            </div> 
        )
    }
}

export default AcademicProjects
