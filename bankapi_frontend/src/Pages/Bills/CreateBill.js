import React, { useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavigationBar } from '../Components/NavigationBar';


function CreateBill(){

    function SelectDate(){
        const [selectedDate, setSelectedDate] = useState(new Date());
        return (
            <div>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat= "MM/dd/yyyy"
                    isClearable={true}
                    showYearDropdown={true}
                />
            </div>
        );
    }

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
            creation_date: String(data.creation_date),
            payment_date: String(data.payment_date),
            recurring_date: data.recurring_date,
            upcoming_payment_date: String(data.upcoming_payment_date),
            payment_amount: data.payment_amount
        })
            .then(res => {
                console.log(res.data);
                setData(emptyData);
            })
    }
    
    return (
        <div>
            <NavigationBar />
        <div className="container">
            <br />
            <div className="row">
                <div className="">
                    <h2 className="text-center">Create Bill</h2>
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
                {/* <Form.Control onChange={(e)=>handle(e)} id="creation_date" value={data.creation_date}  placeholder="Enter Creation Date" /> */}
                <Form.Control
                    type="date"
                    onChange={(e)=>handle(e)}
                    id="creation_date"
                    value={data.creation_date}
                    placeholder="Enter Creation Date" />
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Payment Date</Form.Label>
                {/* <Form.Control onChange={(e)=>handle(e)} id="payment_date" value={data.payment_date}  placeholder="Enter Payment Date" /> */}
                <Form.Control
                    type="date"
                    onChange={(e)=>handle(e)}
                    id="payment_date"
                    value={data.payment_date}
                    placeholder="Enter Payment Date" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Recurring Date</Form.Label>
                <Form.Select onChange={(e)=>handle(e)} id="recurring_date" value={data.recurring_date}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </Form.Select>
                {/* <Form.Control onChange={(e)=>handle(e)} id="recurring_date" value={data.recurring_date}  placeholder="Enter Recurring Date" /> */}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Upcoming Payment Date</Form.Label>
                {/* <Form.Control onChange={(e)=>handle(e)} id="upcoming_payment_date" value={data.upcoming_payment_date}  placeholder="Enter Upcoming Payment Date" /> */}
                <Form.Control
                    type="date"
                    onChange={(e)=>handle(e)}
                    id="upcoming_payment_date"
                    value={data.upcoming_payment_date}
                    placeholder="Enter Upcoming Payment Date" />
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
                <Button variant="primary">View All Bills</Button>
            </Link>
            <Link to="/Transactions">
                <Button variant="primary">Return to Transactions</Button>
            </Link>
            <Link to="/Accounts">
                <Button variant="primary">Return to Accounts</Button>
            </Link>
            </Form>
        </Container>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CreateBill;