<<<<<<< HEAD
=======

import "./styles.css";
>>>>>>> master
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import { Container, Navbar, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import  NavigationBar  from "../Components/NavigationBar";
import "./styles.css";

//  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';




export default function Home() {
return (
  <div className="app-main">

  <NavigationBar/>

  {/* <Jumbotron>
<h1>Hello, world!</h1>
<p>
  This is a simple hero unit, a simple jumbotron-style component for calling
  extra attention to featured content or information.
</p>
<p>
  <Button bsStyle="primary">Learn more</Button>
</p>
</Jumbotron> */}
  <section class="bgimage">
    {/* <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h5>Hello, world! Full width Hero-unit header</h5>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a href="#" class="btn btn-primary btn-large">Learn more »</a></p>
        </div>
      </div>
    </div> */}
  </section>
          <div >
            <h1 class="titleBank" style={{color: "green"}}> Elite 11 Bank</h1>
          </div>
  
          {/* <div >
             <Card id="card_body" ><Card.Body class="card_text">
              Here at Elite 11 banking, as long as you have money in your account and reward points..we can find an offer for you. 
              <br></br>That's right, no credit check! See what you may qualify for down below.
              </Card.Body></Card>
          </div> */}
 
   
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