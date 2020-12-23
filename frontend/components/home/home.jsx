import React from 'react';
import NavContainer from './../navigation/nav_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

// import { HotModuleReplacementPlugin } from 'webpack';

 const Home = () => (
<>
<NavContainer />

{/* <div className="home"> */}
 
<section className="home-top">
    

    <h1 className="home-top">
             <b><p className = "home-topt">Trilla helps teams work </p> <p className = "home-topt">more collaboratively and</p>  <p className = "home-topt">get more done.</p></b> 
        

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
                <button className="sign-email" type="submit">Sign Up - Its Free! </button>
        </form> 
        </a>

</section> 

     <div className="home-mid">

        
           
        {/* <div className="home">
                 <a href='https://trilla.herokuapp.com/#/signup'>
                 <img src="https://i.ibb.co/BTYLp6K/trillamidnew.png" alt="trillamid"/>  
                 </a>
   
    </div>   */}

      <div className="mid-left">
         <h3 className="mid-heading"> Work with any team </h3>
         <p className="mid-p"> Whether its for work, a side  project or even </p> <p className="mid-p"> the next family vacation.  Trilla helps your</p> <p className="mid-p"> team stay organized. </p>

         <NavLink to='/signup'> <button className="home-arrow">    Start Doing <FontAwesomeIcon  icon={faArrowRight} className='fstylea'/> </button></NavLink>
    </div>

    <div className="mid-right">
              <img className="hm-img-mid" src="https://i.ibb.co/khwKJ2T/trellodown.png" alt="trillabot" />
          
    </div>
        
     </div>


         <div>



             {/* <div className="home">
                 <img src="https://i.ibb.co/8DQpLnf/trillahomepagebottom.png" alt="trillabot" />


             </div> */}


         </div>
     {/* </div> */}
     </>

 )




export default Home;
