import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';
import { NavigationBar } from '../Components/NavigationBar';
import "./customersstyles.css";


function UpdateCustomer () {

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
        Axios.get(`${API_URL}/${params.id}`).then(d=>{
            let customer = d.data;
            setData(customer);
        }).catch(err=>alert(err))
    }
 



    function handle(e){
        const newdata = { ...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    function handleAddress(e){
        const newdata = { ...data};
        let address = {...newdata.address[0]};
        address[e.target.id] = e.target.value;
        newdata.address[0] = address;
        setData(newdata);
        console.log(newdata);
    }


    function submit(e){
        e.preventDefault();
        Axios.put(`${API_URL}/${params.id}`, {
            id: params.id,
            first_name: data.first_name,
            last_name: data.last_name,
            address: [{
                street_name: data.address[0].street_name,
                street_number: data.address[0].street_number,
                city: data.address[0].city,
                state: data.address[0].state,
                zip: data.address[0].zip
            }]
        })
            .then(res => {
                console.log(res.data);
            })
    }

    return (
    <div className='myBackground'>
        <NavigationBar/>
        <br></br>
        <Container className="myTable">
            <br></br>
            <h3 className="myTitle">Update customer</h3>
            <br></br>
          <Form onSubmit={(e)=> submit(e)}>
          <Form.Group className="mb-3" >
              <Form.Label>First Name</Form.Label>
              <Form.Control onChange={(e)=>handle(e)} id="first_name" value={data.first_name}  placeholder="Enter first name" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control onChange={(e)=>handle(e)} id="last_name" value={data.last_name}  placeholder="Enter last name" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Street Number</Form.Label>
              <Form.Control onChange={(e)=>handleAddress(e)} id="street_number" value={data.address[0].street_number}type="streetnumber" placeholder="Enter street number" />
          </Form.Group>

          <Form.Group className="mb-3" >
              <Form.Label>Street Name</Form.Label>
              <Form.Control onChange={(e)=>handleAddress(e)} id="street_name" value={data.address[0].street_name} type="streetname" placeholder="Enter street name" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={(e)=>handleAddress(e)} id="city" value={data.address[0].city} type="city" placeholder="Enter city" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control onChange={(e)=>handleAddress(e)} id="state" value={data.address[0].state} type="state" placeholder="Enter state" />
          </Form.Group>

          <Form.Group className="mb-3" >
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={(e)=>handleAddress(e)} id="zip" value={data.address[0].zip} type="zip" placeholder="Enter zip code" />
          </Form.Group>

          <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form>
          <br></br>
          <Link to="/customers">
          <Button variant="success">Back to Customers</Button>
          </Link>
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
);
}

export default UpdateCustomer;
