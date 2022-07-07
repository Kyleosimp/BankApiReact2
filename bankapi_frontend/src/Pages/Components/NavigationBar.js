import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {Link} from "react-router-dom"



export const NavigationBar = () => (
    <Navbar  bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Elite 11 Bank</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
      <Nav.Link as={Link} to="/viewAccounts">Accounts</Nav.Link>
      <Nav.Link as={Link} to="/transactions">Transactions</Nav.Link>
      <Nav.Link as={Link} to="/ListBills">Bills</Nav.Link>
      <Nav.Link as={Link} to="/loanrequests">Loan Requests</Nav.Link>
    </Nav>
    <br></br>
    <br></br>
    <br></br>
    </Container>
  </Navbar>
)








