// import { Fragment } from "react"
import { Navbar,Nav, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"


import '../styles/AppNavbar.css'



export default function AppNavbar(){
    return(
        <Navbar className=" appNavbar" fixed="top"  expand="lg">
            <NavbarBrand as={Link} to='/' className="navbar--text navbar--title">Paolo Misa</NavbarBrand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse className="justify-content-end"id="basic-navbar-nav">
                <Nav className="mr-auto">
                   <Nav.Link className="navbar--text" as={Link} to="#"exact>Projects</Nav.Link>   
                   <Nav.Link className="navbar--text" as={Link} to="#"exact>Profile</Nav.Link>   
                   <Nav.Link className="navbar--text"  as={Link} to="#"exact>Contact Me</Nav.Link>   

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}