import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import { Container, Navbar, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { NavigationBar } from "../Components/NavigationBar";



export default function Home() {
  return (
    <div className="app-main">

<NavigationBar/>
        <div >
          <h1 class="titleBank" style={{color: "green"}}> Elite 11 Bank</h1>
        </div>

        {/* <div >
           <Card id="card_body" ><Card.Body class="card_text">
            Here at Elite 11 banking, as long as you have money in your account and reward points..we can find an offer for you. 
            <br></br>That's right, no credit check! See what you may qualify for down below.
            </Card.Body></Card>
        </div> */}
 <header>
 <img src='https://files.123freevectors.com/wp-content/original/150781-dark-green-diagonal-shiny-lines-background.jpg' alt="banking" style={{width: "1366px", height: "200px"}} />
 </header>
 
 <div >
           <Card id="card_body" ><Card.Body class="card_text">
           Welcome To Elite 11 Bank!
            <br></br>
            We are very excited and happy to get the opportunity to serve you as one of our respectable customers. 
          
            We really thank you for choosing us.
            </Card.Body></Card>
        </div>
 {/* <Card  class = "card "style={{width: "1500px", height: "200px"}} > ELITE TEAM</Card> */}


      </div>
      //  <Card>
      //  <img src='https://files.123freevectors.com/wp-content/original/150781-dark-green-diagonal-shiny-lines-background.jpg' alt="banking" style={{width: "1500px", height: "200px"}} />
      //  </Card>




 
  );
}
