import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import AccountService from "./AccountService";


const CreateAccount = () =>{

    const [type, setType] = useState('');
    const [nicekname, setNickname] = useState ('');
    const [rewards, setRewards]  = useState('');
    const [balance, setBalance] = useState ('');
    const [customer, setCustomer] = useState({id: ''});



  const navigate = useNavigate;
  const {id} = useParams;

   const account = { type, nicekname, rewards, balance, customer};


   if (id){
    AccountService.updateAccount(id, account).then(() =>{
   navigate("/accounts"); 


    }).catch((error)=>{
        console.log(error)
    });


   }else {

     AccountService.createAccount(account).then((response)=>{
     console.log(response.data)

    // navigate("/accounts");
     }).catch((error)=> {
        console.log(error);
     });

   }

  
   const title = () => {

    if (id) {
        return <h2 className="text-center">Update Account</h2>
    }else{
        return <h2 className="text-Center">Create Account</h2>
    }
   }
 

   useEffect(() => {
    AccountService.getAccount(id).then((repsonse)=>{
        console.log(repsonse.data.data)

        setType(repsonse.data.data.type);
        setNickname(repsonse.data.data.nickname);
        setRewards(repsonse.data.data.rewards);
        setBalance(repsonse.data.data.balance);
        setCustomer(repsonse.data.data.customer.id);

    }).catch((e)=>{
        console.log(e); 
    }); 
   }, [id]);

   return (
    <div>
      <br /> 
      <div className="container">
        <div className="row">
          <div style={{ backgroundColor: "white", color: "black" }} className="card col-md-6 offset-md-3 offset-md-3">
            { title() }
            <div className="card-body">
              <Form >
                <div className="form-group mb-2">
                  <label className="form-label">Account Type:</label>
                  <input
                    type="text"
                    placeholder="Enter Account Type"
                    name="type"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Nickname:</label>
                  <input
                    type="text"
                    placeholder="Enter Account Nickname"
                    name="nickname"
                    className="form-control"
                    value={nicekname}
                    onChange={(e) => setNickname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Rewards:</label>
                  <input
                    type="text"
                    placeholder="Enter Reward Points"
                    name="rewards"
                    className="form-control"
                    value={rewards}
                    onChange={(e) => setRewards(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Balance:</label>
                  <input
                    type="text"
                    placeholder="Enter Current Balance"
                    name="balance"
                    className="form-control"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Customer ID:</label>
                  <input
                    type="text"
                    placeholder="Enter Customer ID"
                    name="customer"
                    className="form-control"
                   
                    onChange={(e) => (customer.id = e.target.value)}
                  ></input>
                </div>
    
                <Link to="/customers">
                <Button variant="outline-success" >Back</Button>
                </Link>
                <Button variant="success" type="submit" className="submitButton" style={{ marginLeft: "20px" }}>
                    Submit
                </Button>
                
                {/* <Button type="submit" className="btn btn-primary" onClick={(e) => createOrUppdateAccount(e)} disabled={ !type || !nickname || !rewards || !balance || !customer.id }>Submit</Button>
                <Link to="/accounts" className="btn btn-danger" style={{ marginLeft: "453px" }}>Cancel</Link>
             */}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CreateAccount; 