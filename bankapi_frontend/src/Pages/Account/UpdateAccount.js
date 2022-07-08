import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import axios from 'axios';
import "./accountstyle.css";
import  NavigationBar  from '../Components/NavigationBar';




function UpdateAccount () {

    // /accounts/customer/${customer.id}
    const params = useParams()
  //  "/accounts/customer/edit/:id"
  const API_URL = `http://localhost:8080/accounts/${params.id}`;

  //  const params = useParams()



  const navigate = useNavigate();

    const [data, setData] = useState({
        id: params.id,
        type: "",
        nickname:"",
        rewards: "",
        balance: "",
        //customer_customer_id: params.id
        })



   
    useEffect(() => {
         getAccountByid();
    }, [])

    const getAccountByid =()=> {
      axios.get(`${API_URL}`).then(d=>{
        let account = d.data; 
        setData(account); 
      }).catch(error=>alert(error))
    }

    function handle(e){
        const newdata = { ...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }


    function submit(e){
        e.preventDefault();
        Axios.put(`${API_URL}`, {
            id: params.id,
            type: data.type,
            nickname: data.nickname,
            rewards: data.rewards,
            balance: data.balance,
             customer_customer_id: params.id
          
        })
            .then(res => {
                console.log(res.data);
                navigate(`/viewAccounts`);
              
            })
    }


    return (
        <div className='myBackground'>
            <NavigationBar/>
            <br></br>
              <Container className="myTable">
              <br></br>
            <h3 className="myTitle">Update Account</h3>
            <br></br>
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
                    <Form.Label>Account ID</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="customer_customer_id" value={data.id} type="customer_customer_id" placeholder="Enter Customer ID" disabled />
                </Form.Group> 


                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
                <br></br>
                {/* <Link to="/viewAccounts">
                <Button variant="outline-success">View Accounts</Button>
                </Link>
                <br></br>
                    <br></br>
                    <Link to="/home">
                    <Button variant="outline-success">Home</Button>
                    </Link> */}
                    
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
    </div>   
    )
}

export default UpdateAccount;