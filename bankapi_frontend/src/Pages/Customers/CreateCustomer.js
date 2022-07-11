import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';
import  NavigationBar  from '../Components/NavigationBar';
import "./customersstyles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateCustomer () {
    // const API_URL = 'http://localhost:8080/customers';

    const successNewCustomer = () => {
        toast.success("Successfully Created New Customer ",{
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

       const API_URL = 'http://localhost:8080/customers';

    const emptyData = {
        first_name: "",
        last_name: "",
        street_name: "",
        street_number: "",
        city: "",
        state: "",
        zip: ""
        }

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        street_name: "",
        street_number: "",
        city: "",
        state: "",
        zip: ""
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
            first_name: data.first_name,
            last_name: data.last_name,
            address: [{
                street_name: data.street_name,
                street_number: data.street_number,
                city: data.city,
                state: data.state,
                zip: data.zip
            }]
        })
            .then(res => {
                console.log(res.data);
                setData(emptyData);
                successNewCustomer();
            }).catch(err => {
                console.log(err);
                errorMessage();
            })
    }


    return (
        <div className='myBackground'>
            <NavigationBar/>
            <br></br>
              <Container className="myTable">
              <br></br>
                <h3 className="myTitle">Create a customer</h3>
                <br></br>
                <Form onSubmit={(e)=> submit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="first_name" value={data.first_name}  placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="last_name" value={data.last_name}  placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Street Number</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="street_number" value={data.street_number}type="streetnumber" placeholder="Enter street number" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Street Name</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="street_name" value={data.street_name} type="streetname" placeholder="Enter street name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="city" value={data.city} type="city" placeholder="Enter city" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="state" value={data.state} type="state" placeholder="Enter state" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Zip</Form.Label>
                    <Form.Control onChange={(e)=>handle(e)} id="zip" value={data.zip} type="zip" placeholder="Enter zip code" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/customers">
                <Button style={{marginLeft:"20px"}} variant="success">Back to Customers</Button>
                </Link>
                </Form>
               
                {/* <Link to="/customers">
                <Button variant="success">Back to Customers</Button>
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
              <ToastContainer />
        </div>
    )
}

export default CreateCustomer;