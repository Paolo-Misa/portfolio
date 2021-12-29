// import { Fragment } from "react"
import { Navbar,Nav, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"


import '../styles/AppNavbar.css'



export default function AppNavbar(){
    return(
        <Navbar className="appNavbar" fixed="top"  expand="lg">
            <NavbarBrand as={Link} to='/'>Paolo Misa</NavbarBrand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse className="justify-content-end"id="basic-navbar-nav">
                <Nav className="mr-auto">
                   <Nav.Link as={Link} to="#"exact>Projects</Nav.Link>   
                   <Nav.Link as={Link} to="#"exact>About</Nav.Link>   
                   <Nav.Link as={Link} to="#"exact>Contact Me</Nav.Link>   

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}