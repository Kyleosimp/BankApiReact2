import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';
import "./Transactions.css";
import NavigationBar from '../Components/NavigationBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CreateDeposit () {

    // /accounts/customer/${customer.id}
    const params = useParams()
    const API_URL = `http://localhost:8080/accounts/${params.id}/deposits`;

  //  const params = useParams()
  const successMessage = () => {
    toast.success(`Successfully Created New Deposit for Customer ID: ${params.id}`,{
        position: "top-center",
        pauseOnHover: true,
        draggable:false,
        progress: undefined,
    })
  };
  const errorMessage = () => {
     toast.error ("Error, try again! ",{
        position: "top-center",
        pauseOnHover: true,
        draggable:false,
        progress: undefined,
    })
   };
    const emptyData = {
        type: "Deposit",
        transaction_date: "",
        status: "Completed",
        payee_id: "",
        medium: "",
        amount: "",
        description: "",
        account_id: ""
        }

    const [data, setData] = useState({
        type: "Deposit",
        transaction_date: "",
        status: "Completed",
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
                successMessage();
            }).catch(err => {
                console.log(err);
                errorMessage();
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
            <h3 className="myTitle">Make A Deposit</h3>
            <br></br>
            <Form onSubmit={(e)=> submit(e)}>
                 <Form.Group className="mb-3">
                     <Form.Label>Type</Form.Label>
                     <Form.Control onChange={(e)=>handle(e)} id="type" value={data.type}  disabled />
                 </Form.Group>

                 <Form.Group className="mb-3">
                     <Form.Label>Transaction Date</Form.Label>
                     {/* <Form.Control onChange={(e)=>handle(e)} id="transaction_date" value={data.transaction_date}  placeholder="Enter Date" /> */}
                     <Form.Control
                        type="date"
                        id="transaction_date"
                        value={data.transaction_date}
                        onChange={(e)=>handle(e)}
                        placeholder="Enter Date" />
                 </Form.Group>

                 {/* <Form.Group className="mb-3">
        //             <Form.Label>Status</Form.Label>
        //             <Form.Control onChange={(e)=>handle(e)} id="status" value={data.status} placeholder="Status" />
        //         </Form.Group> */}

                 <Form.Group className="mb-3">
                     <Form.Label>Payee Id</Form.Label>
                     <Form.Control onChange={(e)=>handle(e)} id="payee_id" value={data.payee_id} placeholder="Id" />
                 </Form.Group>

                 <Form.Group className="mb-3" >
                     <Form.Label>Medium</Form.Label>
                     {/* <Form.Control onChange={(e)=>handle(e)} id="medium" value={data.medium} placeholder="Enter Medium" /> */}
                     <Form.Select onChange={(e)=>handle(e)} id="medium" value={data.medium}>
                     <option>--Please Select One--</option>
                        <option value="0">Balance</option>
                        <option value="1">Rewards</option>
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
          <ToastContainer />
    </div>
              

                
              
    )
}

export default CreateDeposit;