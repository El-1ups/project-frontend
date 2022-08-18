/* eslint-disable no-tabs */
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './header.scss'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

// These are the links you'll see if you're signed in
const authenticatedOptions = (<>
  <div>
    <div className='collapsable'>

      <NavLink to='/myposts' className='nav-link banner'>
My Posts
      </NavLink>
      <NavLink to='/posts/create' className='nav-link banner'>
Make a Post
      </NavLink>
    </div>
  </div>
  <NavDropdown>
    <NavLink to='/change-password' className='nav-link dropped'>
Change Password
    </NavLink>
    <NavLink to='/sign-out' className='nav-link dropped'>
Sign Out
    </NavLink>
  </NavDropdown></>
)

// These are the links you'll see if you're signed out
const unauthenticatedOptions = (
  <>
    <NavDropdown>
      <div className='collapsable sign-in-up-links'>
        <NavLink to='/sign-up' className='nav-link dropped'>
					Sign Up
        </NavLink>
        <NavLink to='/sign-in' className='nav-link dropped'>
					Sign In
        </NavLink>
      </div>
    </NavDropdown>
  </>
)

// These are the navigation links that will always show
const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link home-link'>Home</NavLink>
  </>
)

const Header = ({ user }) => (
  <Navbar bg='info' variant='dark'>
    <Container>
      <Navbar.Brand>
        {/* Text decoration: none, will remove the underline text decoration
            from the link */}
        <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
					MessageBoard
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='collapsable'>
        {/* Add margin to the start (left) automatically
            So that the links are pushed to the right side of the screen. */}
        <Nav className='ms-auto collapsable'>
          {/* If we have a user, show the span component */}
          {user && (
          /* Add some margin after the welcome message to separate it from the following links */
            <span className='navbar-text me-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {/* If we have a user (it isnt null), show the authenticated links
              otherwise show the unauthenticated links */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
