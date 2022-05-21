import './About.css';
import enzio from '../images/enzio.png';
import 'animate.css';


export default function About(){
    return(
        <>
        
        <div className='animate__animated animate__bounceInRight  aboutdiv'>
        <img src={enzio} alt="All games" className='sylvanas'/>
        <div>
        <h1 className='abouttitle'>Something about us</h1>
        <p className='pabout'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
             ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
             in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             </div>

        </div>

        </>

    )
}