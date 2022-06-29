import React, { useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function CreateBill(){

    const params = useParams()
    const API_URL = `http://localhost:8080/accounts/${params.id}/bill`;

    const emptyData = {
        status: "",
        payee: "",
        nickname: "",
        creation_date: "",
        payment_date: "",
        recurring_date: "",
        upcoming_payment_date: "",
        payment_amount: "",
        account_id: ""
    }

    const [data, setData] = useState({
        status: "",
        payee: "",
        nickname: "",
        creation_date: "",
        payment_date: "",
        recurring_date: "",
        upcoming_payment_date: "",
        payment_amount: "",
        account_id: params.id
    })

    function handle(e){{
        const newdata = { ...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }}

    function submit(e){
        e.preventDefault();
        Axios.post(API_URL,{
            status: data.status,
            payee: data.payee,
            nickname: data.nickname,
            creation_date: data.creation_date,
            payment_date: data.payment_date,
            recurring_date: data.recurring_date,
            upcoming_payment_date: data.upcoming_payment_date,
            payment_amount: data.payment_amount
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
                <Form.Label>Status</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="status" value={data.status}  placeholder="Enter Status" />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Payee</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="payee" value={data.payee}  placeholder="Enter Payee" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nickname</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="nickname" value={data.nickname}  placeholder="Enter Nickname" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Creation Date</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="creation_date" value={data.creation_date}  placeholder="Enter Creation Date" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Payment Date</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="payment_date" value={data.payment_date}  placeholder="Enter Payment Date" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Recurring Date</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="recurring_date" value={data.recurring_date}  placeholder="Enter Recurring Date" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Upcoming Payment Date</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="upcoming_payment_date" value={data.upcoming_payment_date}  placeholder="Enter Upcoming Payment Date" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Payment Amount</Form.Label>
                <Form.Control onChange={(e)=>handle(e)} id="payment_amount" value={data.payment_amount}  placeholder="Enter Payment Amount" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Link to="/home">
                <Button variant="primary">Return home</Button>  
            </Link>
            <Link to="/ListBills">
                <Button variant="primary">List Bills</Button>
            </Link>
            </Form>
        </Container>
    )
}

export default CreateBill;