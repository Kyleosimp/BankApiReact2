import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Table,Button, Container } from 'react-bootstrap';
import Axios from 'axios';

class ListAccounts extends Component {
    state = {
        data : []
    }

    async componentDidMount(){
        try{
            const response = await fetch('http://localhost:8080/accounts');
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
        Axios.delete(`http://localhost:8080/accounts/${id}`);
        this.refreshPage();
    }

    render(){
        console.log('render method called');
        const {data} = this.state;

        let tb_data = data.map((account) => {
            return (
                <tr key={account.id}> 
                  <td>{account.id}</td> 
                  <td>{account.type} </td>
                  <td>{account.rewards}</td>
                  <td>{account.balance}</td>
                  <td>
                  <Button onClick={() => {
                    this.deleteCustomer((account.id))
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
                        <th>ID</th>
                        <th>Type</th>
                        <th>Nickname</th>
                        <th>Rewards</th>
                        <th>Balance</th>

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
            
                    </Container>
        )
    }
}

export default ListAccounts;