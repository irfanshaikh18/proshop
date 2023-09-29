import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaHeart, FaUser, FaBell } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'

import SearchBox from './SearchBox'

function Header() {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="">
            <Navbar.Brand>CarRental</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <SearchBox />
              <LinkContainer to="/wishlist">
                <Nav.Link>
                  <FaHeart /> Wishlist
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/notifications">
                <Nav.Link>
                  <FaBell /> notifications
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
