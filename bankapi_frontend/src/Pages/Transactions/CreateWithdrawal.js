import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';
import "./Transactions.css";
import NavigationBar from '../Components/NavigationBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CreateWithdrawal () {

    // /accounts/customer/${customer.id}
    const params = useParams()
    const API_URL = `http://localhost:8080/accounts/${params.id}/withdrawals`;

  //  const params = useParams()

    const emptyData = {
        type: "Withdrawal",
        transactionDate: "",
        status: "Completed",
        medium: "",
        amount: "",
        description: "",
        account_id: ""
        }

    const [data, setData] = useState({
        type: "Withdrawal",
        transactionDate: "",
        status: "Completed",
        medium: "",
        amount: "",
        description:"",
        account_id: params.id
        })


    function handle(e){
        const newdata = { ...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }


    function submit(e){
        e.preventDefault();
        Axios.post(API_URL, {

            type: data.type,
            transactionDate: data.transactionDate,
            status: data.status,
            medium: data.medium,
            amount: data.amount,
            description: data.description
          
        })
            .then(res => {
                console.log(res.data);
                setData(emptyData);
            })
    }


    return (

        <div className='background'>
            <NavigationBar/>
            <br></br>
          <br></br>
          <br></br>
          <Container className="transactionsTable">
          <br></br>
            <h3 className="myTitle">Make A Withdrawal</h3>
            <br></br>
                     <Form onSubmit={(e)=> submit(e)}>
                 <Form.Group className="mb-3">
                     <Form.Label>Type</Form.Label>
                     <Form.Control onChange={(e)=>handle(e)} id="type" value={data.type}  disabled />
                 </Form.Group>

                 <Form.Group className="mb-3">
                     <Form.Label>Transaction Date</Form.Label>
                     {/* <Form.Control onChange={(e)=>handle(e)} id="transactionDate" value={data.transactionDate}  placeholder="Enter Date" /> */}
                     <Form.Control
                        type="date"
                        onChange={(e)=>handle(e)}
                        id="transactionDate"
                        value={data.transactionDate}
                        placeholder="Enter Date" />
                 </Form.Group>

                 {/* <Form.Group className="mb-3">
        //             <Form.Label>Status</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="status" value={data.status} placeholder="Status" />
        //         </Form.Group> */}

                    <Form.Group className="mb-3" >
                     <Form.Label>Medium</Form.Label>
                     {/* <Form.Control onChange={(e)=>handle(e)} id="medium" value={data.medium} placeholder="Enter Medium" /> */}
                     <Form.Select onChange={(e)=>handle(e)} id="medium" value={data.medium}>
                     <option>--Please Select One--</option>
                        <option value="1">Balance</option>
                        <option value="2">Rewards</option>
                     </Form.Select>
                 </Form.Group>
                 <Form.Group className="mb-3" >
                     <Form.Label>Amount</Form.Label>
                     <Form.Control onChange={(e)=>handle(e)} id="amount" value={data.amount} placeholder="Enter Amount" />
                 </Form.Group>
                 <Form.Group className="mb-3" >
                     <Form.Label>Description</Form.Label>
                     <Form.Control onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="Type Description" />
                 </Form.Group>


                 <Button variant="primary" type="submit">
                     Submit
                 </Button>
                 </Form>
                 <br></br>
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
          <br></br>
          <br></br>

          
    </div>





        // <div className="container">
        // <br />
        //   <div className="row">
        //   <div class="p-3 mb-2 bg-success text-white">
        //     <h2 className="text-center">Make A Withdrawal</h2>
        //       <div className="card-body">
        //         <Form onSubmit={(e)=> submit(e)}>
        //         <Form.Group className="mb-3">
        //             <Form.Label>Type</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="type" value={data.type}  disabled />
        //         </Form.Group>

        //         <Form.Group className="mb-3">
        //             <Form.Label>Transaction Date</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="transactionDate" value={data.transactionDate}  placeholder="Enter Date" />
        //         </Form.Group>

        //         {/* <Form.Group className="mb-3">
        //             <Form.Label>Status</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="status" value={data.status} placeholder="Status" />
        //         </Form.Group> */}

        //         <Form.Group className="mb-3" >
        //             <Form.Label>Medium</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="medium" value={data.medium} placeholder="Enter Medium" />
        //         </Form.Group>
        //         <Form.Group className="mb-3" >
        //             <Form.Label>Amount</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="amount" value={data.amount} placeholder="Enter Amount" />
        //         </Form.Group>
        //         <Form.Group className="mb-3" >
        //             <Form.Label>Description</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="Type Description" />
        //         </Form.Group>



        //         <Button variant="primary" type="submit">
        //             Submit
        //         </Button>
        //         </Form>
        //         <br></br>
        //         <Link to="/transactions">
        //         <Button variant="warning">View Transactions</Button>
        //         </Link>
        //       </div>
        //       </div>
        //       </div>
        //       <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>                
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //       </div>
    )
}

export default CreateWithdrawal;