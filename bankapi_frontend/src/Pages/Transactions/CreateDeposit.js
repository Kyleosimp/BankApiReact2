import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';


function CreateDeposit () {

    // /accounts/customer/${customer.id}
    const params = useParams()
    const API_URL = `http://localhost:8080/accounts/${params.id}/deposits`;

  //  const params = useParams()

    const emptyData = {
        type: "",
        transaction_date: "",
        status: "",
        payee_id: "",
        medium: "",
        amount: "",
        description: "",
        account_id: ""
        }

    const [data, setData] = useState({
        type: "",
        transaction_date: "",
        status: "",
        payee_id: "",
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
            transaction_date: data.transaction_date,
            status: data.status,
            payee_id: data.payee_id,
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
              <Container>
                <Form onSubmit={(e)=> submit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="type" value={data.type}  placeholder="Enter Type" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Transaction Date</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="transaction_date" value={data.transaction_date}  placeholder="Enter Date" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="status" value={data.status} placeholder="Status" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Payee Id</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="payee_id" value={data.payee_id} placeholder="Id" />
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
                <Button variant="outline-success">View Transactions</Button>
                </Link>
              </Container>
    )
}

export default CreateDeposit;