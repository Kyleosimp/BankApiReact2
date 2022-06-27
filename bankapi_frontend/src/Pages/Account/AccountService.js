import axios from 'axios';

const ACCOUNT_URL = "http://localhost:8080/accounts";

class AccountService {

    createAccount(account){
        return axios.post(ACCOUNT_URL, + account)
    }

    getAccount(id){
        return axios.get(ACCOUNT_URL + '/' + id)
    }
  
   updateAccount (id, account) {
    return axios.put(ACCOUNT_URL + '/' + id, account)
   }   


 deleteAccount(id){

    return axios.delete(ACCOUNT_URL+ '/' + id)
 }


//  getAccounts(){
//     return axios.get(ACCOUNT_URL +  '/' + "ViewAccounts" )
//  }



}

export default new AccountService; 