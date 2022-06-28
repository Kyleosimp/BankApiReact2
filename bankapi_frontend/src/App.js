import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Customers from './Pages/Customers/Customers';
import CreateCustomer from './Pages/Customers/CreateCustomer';
import UpdateCustomer from './Pages/Customers/UpdateCustomer';
import CreateAccount from './Pages/Account/CreateAccount';
import Transactions from './Pages/Transactions/Transactions';
import Home from './Pages/Home/Home';
import ListAccounts from './Pages/Account/ListAccounts.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/accounts" element={<CreateAccount/>}></Route>
        <Route path='/viewAccounts' element={<ListAccounts/>}></Route>
        <Route path="/newcustomer" element={<CreateCustomer/>}></Route>
        <Route path="/transactions" element={<Transactions/>}></Route>
        <Route path="/customers/edit/:id" element={<UpdateCustomer/>}></Route>
        <Route path="/*" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}


export default App;
