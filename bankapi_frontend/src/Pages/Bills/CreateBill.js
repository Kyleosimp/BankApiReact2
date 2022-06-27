import React from 'react';
import {Link} from '../../../../react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap';
import {BillService } from './BillService';

const CreateBillComponent = () => {
    const {status, setStatus} = useState('');
    const {payee, setPayee} = useState('');
    const {nickname, setNickname} = useState('');
    const {creation_date, setCreationDate} = useState('');
    const {payment_date, setPaymentDate} = useState('');
    const {recurring_date, setRecurringDate} = useState('');
    const {upcoming_payment_date, setUpcomingPaymentDate} = useState('');
    const {payment_amount, setPaymentAmount} = useState('');
    const {account} = useState({ id:''});

    const navigate = useNavigate();

    const createBill = (e) => {
        e.preventDefault();
        const bill = {
            status: status,
            payee: payee,
            nickname: nickname,
            creation_date: creation_date,
            payment_date: payment_date,
            recurring_date: recurring_date,
            upcoming_payment_date: upcoming_payment_date,
            payment_amount: payment_amount,
            account: account
        };
        BillService.createBill(bill).then(() => {
            navigate('/bills');
        }).catch(error => {
            console.log(error);
        }
        );
    }

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div style={{ backgroundColor: "white", color: "black" }} className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Create Bill</h2>
                        <div className="card-body">
                            <Form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Status</label> <br />
                                    <input type="text"
                                    placeholder='Enter Status'
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Payee</label> <br />
                                    <input type="text"
                                    placeholder='Enter Payee'
                                    name="payee"
                                    className="form-control"
                                    value={payee}
                                    onChange={(e) => setPayee(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nickname</label> <br />
                                    <input type="text"
                                    placeholder='Enter Nickname'
                                    name="nickname"
                                    className="form-control"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Creation Date</label> <br />
                                    <input type="text"
                                    placeholder='Enter Creation Date'
                                    name="creation_date"
                                    className="form-control"
                                    value={creation_date}
                                    onChange={(e) => setCreationDate(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Payment Date</label> <br />
                                    <input type="text"
                                    placeholder='Enter Payment Date'
                                    name="payment_date"
                                    className="form-control"
                                    value={payment_date}
                                    onChange={(e) => setPaymentDate(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Recurring Date</label> <br />
                                    <input type="text"
                                    placeholder='Enter Recurring Date'
                                    name="recurring_date"
                                    className="form-control"
                                    value={recurring_date}
                                    onChange={(e) => setRecurringDate(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Upcoming Payment Date</label> <br />
                                    <input type="text"
                                    placeholder='Enter Upcoming Payment Date'
                                    name="upcoming_payment_date"
                                    className="form-control"
                                    value={upcoming_payment_date}
                                    onChange={(e) => setUpcomingPaymentDate(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Payment Amount</label> <br />
                                    <input type="text"
                                    placeholder='Enter Payment Amount'
                                    name="payment_amount"
                                    className="form-control"
                                    value={payment_amount}
                                    onChange={(e) => setPaymentAmount(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Account</label> <br />
                                    <input type="text"
                                    placeholder='Enter Account'
                                    name="account"
                                    className="form-control"
                                    value={account}
                                    onChange={(e) => setAccount(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <Button variant="primary" type="submit" onClick={createBill}>Create Bill</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBill;