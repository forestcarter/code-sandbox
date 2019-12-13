import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <div>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle
        id="overrides-nav-toggler"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="SLL">Singly-Linked List</Nav.Link>
          <Nav.Link href="BST">Binary Search Tree</Nav.Link>
          <Nav.Link href="MBH">Max Binary Heap</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
