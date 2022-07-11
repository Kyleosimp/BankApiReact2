import Axios  from "axios";
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Form, Button} from "react-bootstrap";

import NavigationBar from '../Components/NavigationBar';
import "./loan.css";

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
      <div class="loan_background">
        <NavigationBar/>
        {/* <div >
          <h1 class="title_loan">Personal Loans</h1>
        </div> */}

    

        <div class="form">
          <Container>
          <h3 class="title_loan">Personal Loans</h3>

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
              
              <Button id="submit_loan" variant="success" type="submit">
                Submit
              </Button>
              
            </Form>
            <br></br>
            
            
            
            <label class="loan_status">Loan Status</label>
            <Card body class="card">{result}</Card>
            
          </Container>
        </div>
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
      
    );

    
        
       
    

    

}   

export default DisplayLoan;