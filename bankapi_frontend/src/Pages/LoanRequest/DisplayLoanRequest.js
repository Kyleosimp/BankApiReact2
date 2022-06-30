import Axios  from "axios";
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./loan.css"

import 'bootstrap/dist/css/bootstrap.min.css';




function DisplayLoan () {

    
    
    const[result, setResult] = useState('');

 
    const [data, setData] = useState({
       balance: 0,
       rewards: 0
    })

   
    const API_URL = `http://localhost:8080/loanrequests?balance=${data.balance}&rewards=${data.rewards}`;

   function handle(e){
    const newdata = {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
    

   }





    function submit(e){
        e.preventDefault();
        Axios.get(API_URL).then(d=> {
         setResult(d.data);
          console.log(result);
        
        
           
            
        }).catch((e)=> console.log(e));
    
        }



  
    
   

    return (
      <div>
        <div>
          <h1 class="title_loan">Elite 11 <br></br> Personal Loans</h1>
        </div>

        <div>
           <p class="message">
            Here at Elite 11 banking, as long as you have money in your account and reward points..we can find an offer for you. 
            <br></br>That's right, no credit check! See what you may qualify for down below.
            </p>
        </div>

        <div class="form">
          <Container>
            <Form onSubmit={(e) => submit(e)}>
              <Form.Group className="mb-3" controlId="formBalance">
                <Form.Label class="balance">Account Balance</Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  id="balance"
                  type="balance"
                  value={data.balance}
                  placeholder="Enter balance"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRewards">
                <Form.Label class="rewards">Reward Points</Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  id="rewards"
                  type="rewards"
                  value={data.rewards}
                  placeholder="Enter rewards"
                />
              </Form.Group>
              <br></br>
              <br></br>
              <br></br>
              <Button id="submit_loan" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <br></br>
            <Link to="/home" class="home">
              <Button variant="outline-success">Return to Home</Button>
            </Link>
            
            <Card body class="card">{result}</Card>
          </Container>
        </div>
      </div>
    );

    
        
       
    

    

}   

export default DisplayLoan;