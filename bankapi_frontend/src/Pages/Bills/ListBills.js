import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Table,Button, Container } from 'react-bootstrap';
import { Axios } from 'axios';




class ListBills extends Component{
    state = {
        data: []
    }

    async componentDidMount() {
        try {

            const response = await fetch('http://localhost:8080/bill');

            const data = await response.json();
            console.log(data);  
            this.setState({data});
        } catch (error) {
            console.log(error);
        }
    }

    refreshPage() {
        window.location.reload(false);
        }

        deleteBill(id) {
            Axios.delete(`https://localhost:8080/bill/${id}`);
            this.refreshPage();
        }

    render() {
        const {data} = this.state;

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
                <Button variant="primary">Return home</Button>  
            </Link>
            <Link to="/Transactions">
                <Button variant="primary">Return to Transactions</Button>
            </Link>
            <Link to="/Accounts">
                <Button variant="primary">Return to Accounts</Button>
            </Link>

                <br></br>
                <br></br>
            </Container>
        );
            
    }
}

export default ListBills;

// import React, {useState, useEffect} from 'react';
// import {Link, useParams} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { Axios } from 'axios';

// const DisplayBillsComponent = () => {
//     const[bill, setBill] = useState([]);
//     const {id} = useParams();

//     useEffect(() => {
//         Axios.get(`https://localhost:8080/bill/${id}`)
//         .then(res => {
//             setBill(res.data);
//         }
//         )
//     }, []);

//     const deleteBill = () => {
//         Axios.delete(`https://localhost:8080/bill/${id}`);
//         window.location.reload(false);
//     }

//     return(
//         <div>
//             <h1 className='text-center'>Bill Details</h1>
//             <br />
//             <Link to='/home'>
//                 <Button variant="outline-success">Home</Button>
//             </Link>
//             <br />
//             <table className = 'table table-striped'>
//                 <thead>
//                     <tr>
//                         <th>Status</th>
//                         <th>Payee</th>
//                         <th>Nickname</th>
//                         <th>Creation Date</th>
//                         <th>Payment Date</th>
//                         <th>Recurring Date</th>
//                         <th>Upcoming Payment Date</th>
//                         <th>Payment Amount</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{bill.status}</td>
//                         <td>{bill.payee}</td>
//                         <td>{bill.nickname}</td>
//                         <td>{bill.creation_date}</td>
//                         <td>{bill.payment_date}</td>
//                         <td>{bill.recurring_date}</td>
//                         <td>{bill.upcoming_payment_date}</td>
//                         <td>{bill.payment_amount}</td>
//                     </tr>
//                 </tbody>
//             </table>
//             <br />
//             <Button variant="outline-danger" onClick={deleteBill}>Delete Bill</Button>
//         </div>
//     );
// }

// export default DisplayBillsComponent;