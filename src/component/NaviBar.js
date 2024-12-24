import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NaviBar = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </header>
    )
}

export default NaviBar