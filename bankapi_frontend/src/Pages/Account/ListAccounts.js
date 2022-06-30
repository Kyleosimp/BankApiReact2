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

    deleteAccount(id) {
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
                  <td>{account.nickname}</td>
                  <td>{account.rewards}</td>
                  <td>{account.balance}</td>
                  <td>
                  <Link to={`/accounts/customer/edit/${account.id}`}>
                  <Button variant="warning"  style={{ marginRight: '0.7em', color: 'white'}}>Update</Button>
                  </Link>

                    <Button onClick={() => {
                    this.deleteAccount((account.id))
                  }} variant="danger"  style={{ marginRight: '0.7em'}} >Delete</Button>

                 
                 
                   <Link to={`/accountsDetails/customer/${account.id}`}>
                  <Button variant="primary" style={{ marginRight: '0.7em'}}>View</Button>
                  </Link>
                  <Link to={`/accounts/withdrawal/${account.id}`}>
                  <Button variant="primary" style={{ marginRight: '0.7em'}}>Create Withdrawal</Button>
                  </Link>
                  <Link to={`/accounts/deposit/${account.id}`}>
                  <Button variant="primary"  style={{ marginRight: '0.7em'}}>Create Deposit</Button>
                  </Link>
                  <Link to={`/accounts/bill/${account.id}`}>
                    <Button variant="primary">Create Bill</Button>
                    </Link>
                  </td>
                </tr>  
            )
            })

        return(
            <Container fluid>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Account ID</th>
                        <th>Type</th>
                        <th>Nickname</th>
                        <th>Rewards</th>
                        <th>Balance</th>
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
            
                    </Container>
        )
    }
}

export default ListAccounts;