import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Table,Button, Container } from 'react-bootstrap';
import Axios from 'axios';
import NavigationBar from '../Components/NavigationBar';
import "./customersstyles.css";

class Customers extends Component {
    state = {
        data : []
    }

    async componentDidMount(){
        this.refreshList();
    }

    async refreshList() {
        try{
            const response = await fetch('http://localhost:8080/customers');
            const data = await response.json();
            console.log(data);
            this.setState({data});
        } catch(error){
            console.log(error);
        }
      }

    deleteCustomer(id) {
      Axios.delete(`http://localhost:8080/customers/${id}`);
      
        setTimeout(()=> {
            this.refreshList()
        },300);

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
                  <Button className="spacedButton" onClick={() => {
                    this.deleteCustomer((customer.id))
                  }} variant="danger">Delete</Button>
                  <Link to={`/customers/edit/${customer.id}`}>
                  <Button className="spacedButton" variant="primary">Update</Button>
                  </Link>
                  <Link to={`/customers/view/${customer.id}`}>
                  <Button className="spacedButton" variant="primary">View</Button>
                  </Link>
                  <Link to={`/accounts/customer/${customer.id}`}>
                  <Button className="spacedButton" variant="primary">Create Account</Button>
                  </Link>
                  </td>
                </tr>  
            )
            })

        return(
        <div className='myBackground'>   
        <NavigationBar/>
            <br></br>
            <Container className="myTable">
                <br></br>
                <h3 className="myTitle">List of customers</h3>
                <br></br>
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
                    <Link to="/newcustomer">
                    <Button variant="success">Create new customer</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    </Container>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>                
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
        </div>             
        )
    }
}

export default Customers