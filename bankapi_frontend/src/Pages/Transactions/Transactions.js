import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Transactions.css";
import {NavigationBar} from '../Components/NavigationBar';

class Transactions extends Component {
  state = {
    data : [],
    data2 : [],
    data3 : []
    
  }

  async componentDidMount(){
    try{
        const response = await fetch('http://localhost:8080/bill');
        const data = await response.json();
        console.log(data);
        this.setState({data});

        const response2 = await fetch('http://localhost:8080/withdrawals');
        const data2 = await response2.json();
        console.log(data2);
        this.setState({data2});

        const response3 = await fetch('http://localhost:8080/accounts/deposits');
        const data3 = await response3.json();
        console.log(data3);
        this.setState({data3});
        
      } 
      catch(error){
        console.log(error);
      }
    

  }
    render() {
      const {data} = this.state;
      const {data2} = this.state;
      const {data3} = this.state;      

      let tb_data = data.map((bill) => {
        return (
            <tr key={bill.id}> 
              <td> {bill.account.id}</td>
              <td>{bill.payment_date}</td>
              <td>{bill.payee}</td> 
              <td></td>
              <td className='billAmount'>$-{bill.payment_amount}</td>
              <td></td>
              <td></td>
              <td>${bill.tmp_account_balance}</td>
            </tr>  
        )
        })

        let tb_data2 = data2.map((withdrawal) => {
          return (
              <tr key={withdrawal.id}> 
                <td>{withdrawal.account.id}</td> 
                <td>{withdrawal.transactionDate}</td>
                <td></td>
                <td>{withdrawal.description}</td>
                <td></td>
                <td className='withdrawalAmount'>$-{withdrawal.amount}</td>
                <td></td>
                <td>${withdrawal.tmp_account_balance}</td>
              </tr>  
          )
          })
          let tb_data3 = data3.map((deposit) => {
            return (
                <tr key={deposit.id}> 
                  <td>{deposit.account.id}</td> 
                  <td>{deposit.transaction_date}</td>
                  <td></td>
                  <td>{deposit.description}</td>
                  <td></td>
                  <td></td>
                  <td className='depositAmount'>$+{deposit.amount}</td>
                  <td>${deposit.tmp_account_balance}</td>
                  
                  
                </tr>  
            )
            })
      return (
        <div className='background'>
          <NavigationBar/>
          <br></br>
          <br></br>
          <br></br>

          
        <Container className='transactionsTable'>
        <h3 className='title'>Transactions</h3>
           
            <Table>
                <thead>
                    <tr>
                        <th>AccountID</th>
                        <th>Date</th>
                        <th>Payee</th>
                        <th>Description</th>
                        <th>Bill</th>
                        <th>Withdrawal</th>
                        <th>Deposit</th>
                        <th>Account Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {tb_data}
                    {tb_data2}
                    {tb_data3}
                </tbody>
            </Table>
            
            <br></br>
            {/* <Link to="/accounts/withdrawal/:id">
            <Button variant="outline-success">Create Withdrawal</Button>
            </Link> */}
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
                    <br></br>
                    <br></br>
                    <br></br>
        </div>
      )
    }
  }

  export default Transactions