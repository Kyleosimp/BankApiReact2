import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';
import "./accountstyle.css";
import { NavigationBar } from '../Components/NavigationBar';



function CreateAccount () {
    const navigate = useNavigate();
    // /accounts/customer/${customer.id}
    const params = useParams()
    const API_URL = `http://localhost:8080/customers/${params.id}/accounts`;

  //  const params = useParams()

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
        customer_customer_id: params.id
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
                navigate(`/viewAccounts`);
            })
    }


    return (
              <Container>
                 <NavigationBar/>
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
              
       {/* <Form.Group controlId="formBasicSelect">
        <Form.Label>Type</Form.Label>
          <Form.Control 

          as="select"
          value={data}
          onChange={e => {
            console.log("e.target.value", e.target.value);
               setData(e.target.value  );
                }}
         // onChange={(e)=>handle(e)}
        //   <Form.Group controlId="formBasicSelect">
        //   <Form.Label>Select Norm Type</Form.Label>
        //   <Form.Control
        //     as="select"
        //     value={type}
        //     onChange={e => {
        //       console.log("e.target.value", e.target.value);
        //       setType(e.target.value);
        //     }}
        //   >
        //     <option value="DICTUM">Dictamen</option>
        //     <option value="CONSTANCY">Constancia</option>
        //     <option value="COMPLEMENT">Complemento</option>
        //   </Form.Control>
        // </Form.Group>
          type="type">
             <option  value="" > Select Type</option>
          <option  value="Checking">Checking</option>
          <option value="Savings">Savings</option>
          <option  value="Credit">Credit</option>
        </Form.Control>
      </Form.Group> */}



                <Form.Group className="mb-3" >
                    <Form.Label>Balance</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="balance" value={data.balance} type="balance" placeholder="Enter Balance" />
                </Form.Group>

                {/* <Form.Group className="mb-3">
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="customer_customer_id" value={data.customer_customer_id} type="customer_customer_id" placeholder="Enter Customer ID" />
                </Form.Group> */}


                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
                <br></br>
                <Link to="/customers">
                <Button variant="outline-success">Back to Customers</Button>
                </Link>
                <br></br>
                <br></br>
                <Link to="/viewAccounts">
                    <Button variant="outline-success">View Accounts</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="/home">
                    <Button variant="outline-success">Home</Button>
                    </Link>
              </Container>
    )
}

export default CreateAccount;