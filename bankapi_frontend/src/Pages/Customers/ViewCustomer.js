import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import  NavigationBar  from '../Components/NavigationBar';
import "./customersstyles.css";


function ViewCustomer () {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        address: [{
            street_name: "",
            street_number: "",
            city: "",
            state: "",
            zip: ""
        }]
        });



    const API_URL = 'http://localhost:8080/customers';

    const params = useParams();


    useEffect(()=> {
        getCustomerByid();
    }, [])




    const getCustomerByid=()=>{
        axios.get(`${API_URL}/${params.id}`).then(d=>{
            let customer = d.data;
            setData(customer);
        }).catch(err=>alert(err))
    }
 


    return (
        <div className='myBackground'>
            <NavigationBar/>
            <br></br>
        <Container className="myTable">
            <br></br>
            <h3 className="myTitle">View a customer</h3>
            <br></br>
          <Form>
          <Form.Group className="mb-3" >
              <Form.Label>First Name</Form.Label>
              <Form.Control  id="first_name" value={data.first_name}  disabled />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control id="last_name" value={data.last_name}   disabled />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Street Number</Form.Label>
              <Form.Control  id="street_number" value={data.address[0].street_number} disabled/>
          </Form.Group>

          <Form.Group className="mb-3" >
              <Form.Label>Street Name</Form.Label>
              <Form.Control id="street_name" value={data.address[0].street_name} disabled/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control id="city" value={data.address[0].city} disabled />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control  id="state" value={data.address[0].state} disabled />
          </Form.Group>

          <Form.Group className="mb-3" >
              <Form.Label>Zip</Form.Label>
              <Form.Control  id="zip" value={data.address[0].zip} disabled />
          </Form.Group>
            <br></br>
          </Form>
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
        </div>
);
}

export default ViewCustomer;
