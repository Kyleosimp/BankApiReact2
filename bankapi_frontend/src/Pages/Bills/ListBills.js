import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Table,Button, Container } from 'react-bootstrap';




class ListBills extends Component{
    state = {
        data: []
    }

    async componentDidMount() {
        try {
            const response = await this.fetch('https://localhost:8080/bill');
            const data = await response.json();
            console.log(data);  
            this.setState({data});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let tb_data = this.state.data.map((bill) => {
            return (
                <tr tr key={bill.id}>
                    <td>{bill.status}</td>
                    <td>{bill.payee}</td>
                    <td>{bill.nickname}</td>
                    <td>{bill.creation_date}</td>
                    <td>{bill.payment_date}</td>
                    <td>{bill.recurring_date}</td>
                    <td>{bill.upcoming_payment_date}</td>
                    <td>{bill.payment_amount}</td>
                </tr>
            );
         })
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Status</th>
                            <th>Payee</th>
                            <th>Nickname</th>
                            <th>Creation Date</th>
                            <th>Payment Date</th>
                            <th>Recurring Date</th>
                            <th>Upcoming Payment Date</th>
                            <th>Payment Amount</th>
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
        );
            
    }
}

export default ListBills;