import React from 'react';
import logotip from '../img/logo.png';
import login from '../img/login.png';

const Header = () => {
   return (
      <header className='header'>
         <div className='container'>
            <img className='header-logo' src={logotip} alt="logo"  />
            <div className='header-enter'>
               <ul className='header-enter-right'>
                  <li className='enter-link'>
                     <img className="enter-login" src={login} alt="login"  />
                  </li>
                  <li className='enter-link'>
                     <a href="#" className="enter-text">Вход </a>
                  </li>
               </ul> 
            </div>
         </div>
      </header>
   )
 }
 
 export default Header