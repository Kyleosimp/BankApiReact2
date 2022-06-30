import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';


function CreateWithdrawal () {

    // /accounts/customer/${customer.id}
    const params = useParams()
    const API_URL = `http://localhost:8080/accounts/${params.id}/withdrawals`;

  //  const params = useParams()

    const emptyData = {
        type: "",
        transactionDate: "",
        status: "",
        medium: "",
        amount: "",
        description: "",
        account_id: ""
        }

    const [data, setData] = useState({
        type: "",
        transactionDate: "",
        status: "",
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
        <div className="container">
        <br />
          <div className="row">
          <div class="p-3 mb-2 bg-info text-white">
            <h2 className="text-center">Make A Withdrawal</h2>
              <div className="card-body">
                <Form onSubmit={(e)=> submit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="type" value={data.type}  placeholder="Enter Type" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Transaction Date</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="transactionDate" value={data.transactionDate}  placeholder="Enter Date" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="status" value={data.status} placeholder="Status" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Medium</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="medium" value={data.medium} placeholder="Enter Medium" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Amount</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="amount" value={data.amount} placeholder="Enter Amount" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="Type Description" />
                </Form.Group>



                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
                <br></br>
                <Link to="/transactions">
                <Button variant="warning">View Transactions</Button>
                </Link>
              </div>
              </div>
              </div>
              </div>
    )
}

export default CreateWithdrawal;