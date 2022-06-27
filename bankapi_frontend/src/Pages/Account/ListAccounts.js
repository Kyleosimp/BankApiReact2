import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Table,Button, Container } from 'react-bootstrap';

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

    render(){
        console.log('render method called');
        const {data} = this.state;

        let tb_data = data.map((account) => {
            return (
                <tr key={account.id}> 
                  <td>{account.id}</td> 
                  <td>{account.type}</td>
                  <td>{account.nickname}</td>
                  <td>{account.rewards}</td>
                  <td>{account.balance}</td>
            
                </tr>  
            )
            })

        return(
            <Container fluid>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
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
                    
                    </Container>
        )
    }
}

export default ListAccounts