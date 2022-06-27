import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Customers from './Pages/Customers/Customers';
import CreateCustomer from './Pages/Customers/CreateCustomer';
import Transactions from './Pages/Transactions/Transactions';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/newcustomer" element={<CreateCustomer/>}></Route>
        <Route path="/transactions" element={<Transactions/>}></Route>
        <Route path="/*" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
