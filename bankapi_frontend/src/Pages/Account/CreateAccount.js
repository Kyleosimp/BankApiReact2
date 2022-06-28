import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';


function CreateAccount () {

    const API_URL = 'http://localhost:8080/viewAccounts';

    const emptyData = {
        type: "",
        nickname: "",
        rewards: "",
        balance: "",
        customer_customer_id: ""
        }

    const [data, setData] = useState({
        type: "",
        nickname: "",
        rewards: "",
        balance: "",
        customer_customer_id: {id: ''}
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
            nickname: data.nickname,
            rewards: data.rewards,
            balance: data.balance,
            // customer_customer_id: data.customer_customer_id
          
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
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="nickname" value={data.nickname}  placeholder="Enter Nickname" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Rewards</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="rewards" value={data.rewards}type="rewards" placeholder="Enter Rewards" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Balance</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="balance" value={data.balance} type="balance" placeholder="Enter Balance" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="customer_customer_id" value={data.customer_customer_id} type="customer_customer_id" placeholder="Enter Customer ID" />
                </Form.Group>


                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
                <br></br>
                <Link to="/customers">
                <Button variant="outline-success">Back to Customers</Button>
                </Link>
              </Container>
    )
}

export default CreateAccount;