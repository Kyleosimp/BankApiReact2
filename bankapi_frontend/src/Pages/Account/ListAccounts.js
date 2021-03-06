import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { Table,Button, Container } from 'react-bootstrap';
import Axios from 'axios';
import "./accountstyle.css";
import  NavigationBar  from '../Components/NavigationBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class ListAccounts extends Component {
    state = {
        data : []
    }

    async componentDidMount(){
        try{
            const response = await fetch('http://localhost:8080/accounts');
            const data = await response.json();
            console.log(data);
            this.setState({data});
        } catch(error){
            console.log(error);
        }

    }

    refreshPage() {
        window.location.reload(false);
      }

    deleteAccount(id) {
        Axios.delete(`http://localhost:8080/accounts/${id}`);
        toast.success("Deleted Account Successfully");
    //        const successMessage = () => {
    //     toast.success(`Successfully Created New Account for Customer ID: `)
    //   };
        this.refreshPage();
      
    }


    render(){
        console.log('render method called');
        const {data} = this.state;

        let tb_data = data.map((account) => {
            return (
                <tr key={account.id}> 
                  <td>{account.id}</td> 
                  <td>{account.type} </td>
                  <td>{account.nickname}</td>
                  <td>{account.rewards}</td>
                  <td>{account.balance}</td>
                  <td>
                  <Link to={`/accounts/customer/edit/${account.id}`}>
                  <Button variant="warning"  style={{ marginRight: '0.7em', color: 'white'}}>Update</Button>
                  </Link>

                    <Button onClick={() => {
                    this.deleteAccount((account.id))
                  }} variant="danger"  style={{ marginRight: '0.7em'}} >Delete</Button>

                 
                 
                   <Link to={`/accountsDetails/customer/${account.id}`}>
                  <Button variant="primary" style={{ marginRight: '0.5em'}}>View</Button>
                  </Link>
                  <Link to={`/accounts/withdrawal/${account.id}`}>
                  <Button variant="primary" style={{ marginRight: '0.5em'}}>Create Withdrawal</Button>
                  </Link>
                  <Link to={`/accounts/deposit/${account.id}`}>
                  <Button variant="primary"  style={{ marginRight: '0.5em'}}>Create Deposit</Button>
                  </Link>
                  <Link to={`/accounts/bill/${account.id}`}>
                    <Button  variant="primary" style={{}}>Create Bill</Button>
                    </Link>

                    <p style={{ marginRight: '0.10em'}} > </p>

                  </td>
                </tr>  
            )
            })
        return(
            
            <div className='myBackground'>
            <NavigationBar/>
            <br></br>
            <Container className="myTable">
            <br></br>
                <h3 className="myTitle">Account</h3>
                <br></br>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Account ID</th>
                        <th>Type</th>
                        <th>Nickname</th>
                        <th>Rewards</th>
                        <th>Balance</th>
                        <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                          {tb_data}
                    </tbody>
                    </Table>
                    <br></br>
                    <Link to="/home">
                    <Button  variant="success">Home</Button>
                    </Link>
                    <br></br>
                    <br></br>
            
                    </Container >
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

        )
    }
}

export default ListAccounts;