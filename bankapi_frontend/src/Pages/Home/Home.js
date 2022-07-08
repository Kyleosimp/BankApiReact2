import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Card } from "react-bootstrap";
import { Container, Navbar, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { Card } from 'react-bootstrap';
import  NavigationBar  from "../Components/NavigationBar";
import "./styles.css";


//  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';




export default function Home() {
return (
  <div className="app-main">

  <NavigationBar/>
  <div className="hero"> 
   <div className="container">     
     <div className="hero-content"> 
       <div className="row"> 
       <div>
//      
//          
//         <div className="col-md-12" id="welcomeHero"> 
//           <h1>ELITE 11 TEAM <svg xmlns="http://www.w3.org/2000/svg" /* width="200" height="16"*/  fill="currentColor" class="bi bi-bank2" /* viewBox="0 0 16 16"*/>
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
</svg></h1>
</div>
//         </div>
//       </div> 
//     </div>
//   </div> 
// </div>

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
  {/* <section className="bgimage"> */}
     
 {/* <h1>THE ELITE DEVS.</h1> */}

  {/* </section> */}
        <br></br>
        <br></br>
       
  <div>

    <div class="row row-cols-3 g-3">
      
  <div class="col">
    
    <div class="card"  style={{marginLeft:"20px"}}>
      <img src="https://vyapaar.net/wp-content/uploads/2020/12/circular-vector-image.jpg" alt="a snow-capped mountain range"/>
      <div class="card-body">
        <h2 class="card-title">John Feil</h2>
        <p class="card-text">Back-End Developer </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://lauckmclean.com/wp-content/uploads/2020/12/brad-480x480.jpg" alt="a snowy mountain with clouds behind it"/>
      <div class="card-body">
        <h2 class="card-title">Luis Figueroa</h2>
        <p class="card-text">Back-End Developer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars3.githubusercontent.com/u/771703?v=4" alt="a mountain range under a thin layer of clouds"/>
      <div class="card-body">
        <h2 class="card-title">Kyle Simpson</h2>
        <p class="card-text">Back-End Developer</p>
      </div>
    </div>
  </div>

</div>
      
     <br></br> 
    <div class="row row-cols-3 g-3">
  <div class="col">
    <div class="card">
      <img src="https://www.clipartkey.com/mpngs/m/94-943097_stockvader-predicted-adig-user-profile-image-png.png" alt="a snow-capped mountain range"/>
      <div class="card-body">
        <h2 class="card-title">Yevgeny Carranza</h2>
        <p class="card-text">Back-End Developer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://uploads-ssl.webflow.com/602d05b9f62951430b8b24d4/607e44305dab6b1876bbc6bb_empty.jpg" alt="a snowy mountain with clouds behind it"/>
      <div class="card-body">
        <h2 class="card-title">Aisha Mundy</h2>
        <p class="card-text">Back-End Developer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://jdi8hm826pc3m33dscjno1s-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/business.png" alt="a mountain range under a thin layer of clouds"/>
      <div class="card-body">
        <h2 class="card-title">Renne Adzadu</h2>
        <p class="card-text">Back-End Developer</p>
      </div>
    </div>
  </div>

</div>
<br></br>

<div class="row row-cols-3 g-3">
  <div class="col">
    <div class="card">
      <img src="https://www.shareicon.net/data/2016/09/15/829470_user_512x512.png" alt="a snow-capped mountain range"/>
      <div class="card-body">
        <h2 class="card-title">Emoni Saylor-Smallwood</h2>
        <p class="card-text">Front-End Developer  

</p>
      </div>
    </div>


  </div>
  </div>
</div>

      
<div className="container-fluid" >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="textonHome">
        <h5>Thank You For Visiting Elite 11 Bank!</h5>
          <p>  We are very excited and happy to get the opportunity to serve you as one of our respectable customers. 
            
            We really thank you for choosing us.</p>
          <p><a href="/customers" class="btn btn-primary btn-large">Become A Customer »</a></p>
         
        </div>
      </div>
    </div> 
  
  
        </div>
        //  <Card>
        //  <img src='https://files.123freevectors.com/wp-content/original/150781-dark-green-diagonal-shiny-lines-background.jpg' alt="banking" style={{width: "1500px", height: "200px"}} />
        //  </Card>
  
  



);
}