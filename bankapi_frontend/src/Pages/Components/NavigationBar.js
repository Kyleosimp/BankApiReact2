// import {React, useState} from 'react';
// import { Nav, Navbar, Container } from 'react-bootstrap';
// import {Link} from "react-router-dom"

// const [homeActive,setHomeActive] = useState(false);

// const handleClick = () => {

// }


// export const NavigationBar = () => (
//     <Navbar collapseOnSelect expand="lg"  bg="light" variant="light">
//     <Container>
//     <Navbar.Brand href="#home">Elite 11 Bank</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link onClick className='navHome' as={Link} to='/home'>Home</Nav.Link>
//       <Nav.Link className='navCustomer' as={Link} to="/customers">Customers</Nav.Link>
//       <Nav.Link as={Link} to="/viewAccounts">Accounts</Nav.Link>
//       <Nav.Link as={Link} to="/transactions">Transactions</Nav.Link>
//       <Nav.Link as={Link} to="/ListBills">Bills</Nav.Link>
//       <Nav.Link as={Link} to="/loanrequests">Loan Requests</Nav.Link>
//     </Nav>
//     <br></br>
//     <br></br>
//     <br></br>
//     </Container>
//   </Navbar>
// )













import {React, useState, useEffect} from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./NavCSS.css"

export default function NavigationBar() {
  const [homeIsActive, setHomeIsActive] = useState((localStorage.getItem("home")) === 'true');
  const [customersIsActive, setCustomersIsActive] = useState((localStorage.getItem("customer")) === 'true');
  const [accountsIsActive, setAccountsIsActive] = useState((localStorage.getItem("account")) === 'true');
  const [transactionsIsActive, setTransactionsIsActive] = useState((localStorage.getItem("transaction")) === 'true');
  const [billsIsActive, setBillsIsActive] = useState((localStorage.getItem("bill")) === 'true');
  const [loanRequestsIsActive, setLoanRequestsIsActive] = useState((localStorage.getItem("loanrequest")) === 'true');

    useEffect(() => {
            setHomeIsActive(localStorage.getItem("home"));
            setCustomersIsActive(localStorage.getItem("customer"));
            setAccountsIsActive(localStorage.getItem("account"));
            setTransactionsIsActive(localStorage.getItem("transaction"));
            setBillsIsActive(localStorage.getItem("bill"))
            setLoanRequestsIsActive(localStorage.getItem("loanrequest"));
    },[]);

  const handleClickHome = () => {
    localStorage.setItem("home", true);
    localStorage.setItem("customer", false);
    localStorage.setItem("account", false);
    localStorage.setItem("transaction", false);
    localStorage.setItem("bill", false);
    localStorage.setItem("loanrequest", false);
    setHomeIsActive(true);
    setCustomersIsActive(false);
    setAccountsIsActive(false);
    setTransactionsIsActive(false);
    setBillsIsActive(false);
    setLoanRequestsIsActive(false);
  };

  const handleClickCustomer = () => {
    localStorage.setItem("home", false);
    localStorage.setItem("customer", true);
    localStorage.setItem("account", false);
    localStorage.setItem("transaction", false);
    localStorage.setItem("bill", false);
    localStorage.setItem("loanrequest", false);
    setHomeIsActive(false);
    setCustomersIsActive(true);
    setAccountsIsActive(false);
    setTransactionsIsActive(false);
    setBillsIsActive(false);
    setLoanRequestsIsActive(false);
  };

  const handleClickAccount = () => {
    localStorage.setItem("home", false);
    localStorage.setItem("customer", false);
    localStorage.setItem("account", true);
    localStorage.setItem("transaction", false);
    localStorage.setItem("bill", false);
    localStorage.setItem("loanrequest", false);
    setHomeIsActive(false);
    setCustomersIsActive(false);
    setAccountsIsActive(true);
    setTransactionsIsActive(false);
    setBillsIsActive(false);
    setLoanRequestsIsActive(false);
  };

  const handleClickTransaction = () => {
    localStorage.setItem("home", false);
    localStorage.setItem("customer", false);
    localStorage.setItem("account", false);
    localStorage.setItem("transaction", true);
    localStorage.setItem("bill", false);
    localStorage.setItem("loanrequest", false);
    setHomeIsActive(false);
    setCustomersIsActive(false);
    setAccountsIsActive(false);
    setTransactionsIsActive(true);
    setBillsIsActive(false);
    setLoanRequestsIsActive(false);
  };

  const handleClickBill = () => {
    localStorage.setItem("home", false);
    localStorage.setItem("customer", false);
    localStorage.setItem("account", false);
    localStorage.setItem("transaction", false);
    localStorage.setItem("bill", true);
    localStorage.setItem("loanrequest", false);
    setHomeIsActive(false);
    setCustomersIsActive(false);
    setAccountsIsActive(false);
    setTransactionsIsActive(false);
    setBillsIsActive(true);
    setLoanRequestsIsActive(false);
  };

  const handleClickLoanRequest = () => {
    localStorage.setItem("home", false);
    localStorage.setItem("customer", false);
    localStorage.setItem("account", false);
    localStorage.setItem("transaction", false);
    localStorage.setItem("bill", false);
    localStorage.setItem("loanrequest", true);
    setHomeIsActive(false);
    setCustomersIsActive(false);
    setAccountsIsActive(false);
    setTransactionsIsActive(false);
    setBillsIsActive(false);
    setLoanRequestsIsActive(true);
  };

  return (
    <Navbar collapseOnSelect expand="lg"  bg="light" variant="light">
    <Container>
    <Navbar.Brand id="navStyle"> <h1>Elite 11 Bank</h1></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={handleClickHome} style={{color: (homeIsActive)=== 'true' ? 'darkgreen' : 'black', fontWeight: (homeIsActive)=== 'true' ? 'bold' : 'normal' }} as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link onClick={handleClickCustomer} style={{color: (customersIsActive)=== 'true' ? 'darkgreen' : 'black', fontWeight: (customersIsActive)=== 'true' ? 'bold' : 'normal'}} as={Link} to="/customers">Customers</Nav.Link>
      <Nav.Link onClick={handleClickAccount} style={{color: (accountsIsActive)=== 'true' ? 'darkgreen' : 'black', fontWeight: (accountsIsActive)=== 'true' ? 'bold' : 'normal'}} as={Link} to="/viewAccounts">Accounts</Nav.Link>
      <Nav.Link onClick={handleClickTransaction} style={{color: (transactionsIsActive)=== 'true' ? 'darkgreen' : 'black', fontWeight: (transactionsIsActive)=== 'true' ? 'bold' : 'normal'}} as={Link} to="/transactions">Transactions</Nav.Link>
      <Nav.Link onClick={handleClickBill} style={{color: (billsIsActive)=== 'true' ? 'darkgreen' : 'black', fontWeight: (billsIsActive)=== 'true' ? 'bold' : 'normal'}} as={Link} to="/ListBills">Bills</Nav.Link>
      <Nav.Link onClick={handleClickLoanRequest} style={{color: (loanRequestsIsActive)=== 'true' ? 'darkgreen' : 'black', fontWeight: (loanRequestsIsActive)=== 'true' ? 'bold' : 'normal'}} as={Link} to="/loanrequests">Loan Requests</Nav.Link>
    </Nav>
    <br></br>
    <br></br>
    <br></br>
    </Container>
  </Navbar>
  );
}