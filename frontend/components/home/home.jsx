import React from 'react';
import NavContainer from './../navigation/nav_container';
// import { HotModuleReplacementPlugin } from 'webpack';

 const Home = () => (
<div className="home">
 <header className="home">

     <NavContainer />

  </header>
<section className="home-top">
    <nav className="home-top">
    <div className="logo" >
                 <a href='https://trilla.herokuapp.com/#/signup'>
        <img src="https://i.ibb.co/vBsFYTy/trillalogoreal.png" alt="trillalogo"/>
                 </a>
    </div>
    <br/>
    <br/>
    </nav>

    <h1 className="home-top">
             <b><p>Trilla helps teams work </p> <p>more collaboratively and</p>  <p>get more done.</p></b> 
        

             <p className="home-topp">
                 Trilla’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.
    </p>

       
             <div className="top-img" >
                 <img src="https://i.ibb.co/8sm4Rf4/realtopright.png" />
             </div>



    </h1>
         
    

             <a href='https://trilla.herokuapp.com/#/signup'>
    <form className="home-signup">
                <input className="sign-email" placeholder="Email" />
                <button className="sign-email" type="submit">Sign Up- Its Free! </button>
        </form> 
        </a>

</section> 

     <div>

        
           
        <div className="home">
                 <a href='https://trilla.herokuapp.com/#/signup'>
                 <img src="https://i.ibb.co/BTYLp6K/trillamidnew.png" alt="trillamid"/>  
                 </a>
   
    </div>  

        
     </div>


         <div>



             <div className="home">
                 <img src="https://i.ibb.co/8DQpLnf/trillahomepagebottom.png" alt="trillabot" />


             </div>


         </div>
     </div>

 )




export default Home;
