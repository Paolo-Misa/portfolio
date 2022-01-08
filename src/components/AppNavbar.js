// import { Fragment } from "react"
import { Navbar,Nav, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"


import '../styles/AppNavbar.css'



export default function AppNavbar(){
    return(
        <Navbar className=" appNavbar" fixed="top"  expand="lg">
            <NavbarBrand as={Link} to='/' className="navbar--text navbar--title">Paolo Misa</NavbarBrand>
            <Nav.Link className="navbar--text p-0 m-0" as={Link} to="/login"exact>.</Nav.Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse className="justify-content-end"id="basic-navbar-nav">
                <Nav className="mr-auto">
                   <Nav.Link className="navbar--text" as={Link} to="/projects"exact>Projects</Nav.Link>   
                   <Nav.Link className="navbar--text" as={Link} to="/profile"exact>Profile</Nav.Link>   
                   <Nav.Link className="navbar--text"  as={Link} to="/contact"exact>Contact Me</Nav.Link>   

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}