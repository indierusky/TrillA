import React from 'react';
// import { HotModuleReplacementPlugin } from 'webpack';

 const Home = () => (

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
         
    

        
    <form className="home-signup">
                <input className="sign-email" placeholder="Email" />
                <button className="sign-email" type="submit">Sign Up- Its Free! </button>
        </form> 

</section> 

    // <div>

        

    //     <div className="home">
    //         <img src="https://i.ibb.co/CMSBgRG/trhomepage.png" alt="trillamain"/>  
            
   
    // </div>  

        
    // </div>
)




export default Home;
