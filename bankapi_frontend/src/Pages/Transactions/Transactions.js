import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Transactions extends Component {
    render() {
      return (
        <Container>
            <h1>TRANSACTIONS</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Bill</th>
                        <th>Withdrawal</th>
                        <th>Deposit</th>
                        <th>Balance</th>
                    </tr>
                </thead>
            </Table>
            <br></br>
            <Link to="/home">
            <Button variant="outline-success">Home</Button>
            </Link>
        </Container>
      )
    }
  }

  export default Transactions