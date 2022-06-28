import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Table,Button, Container } from 'react-bootstrap';
import Axios from 'axios';

class Customers extends Component {
    state = {
        data : []
    }

    async componentDidMount(){
        try{
            const response = await fetch('http://localhost:8080/customers');
            const data = await response.json();
            console.log(data);
            this.setState({data});
        } catch(error){
            console.log(error);
        }

    }

    refreshPage() {
        window.location.reload(false);
      }

    deleteCustomer(id) {
        Axios.delete(`http://localhost:8080/customers/${id}`);
        this.refreshPage();
    }

    render(){
        console.log('render method called');
        const {data} = this.state;

        let tb_data = data.map((customer) => {
            return (
                <tr key={customer.id}> 
                  <td>{customer.id}</td> 
                  <td>{customer.first_name} {customer.last_name}</td>
                  <td>{customer.address.map(address => <div>{address.street_number}  {address.street_name} {address.city} {address.state} {address.zip}</div>)}</td>
                  <td>
                  <Button onClick={() => {
                    this.deleteCustomer((customer.id))
                  }} variant="danger">Delete</Button>
                  </td>
                </tr>  
            )
            })

        return(
            <Container fluid>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {tb_data}
                    </tbody>
                    </Table>
                    <br></br>
                    <Link to="/home">
                    <Button variant="outline-success">Home</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="/newcustomer">
                    <Button variant="outline-success">Create new customer</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="/viewAccounts">
                    <Button variant="outline-success">View Accounts</Button>
                    </Link>
                    </Container>
        )
    }
}

export default Customers