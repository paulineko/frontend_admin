import React from 'react'

import Main1 from '../img/main_1.png';
import Main2 from '../img/main_2.png';
import login from '../img/login.png';
import password from '../img/password.png';

const Authorization = () => {
    return (
      <div>
        <main>
          <div class = "container-authorization">
            <div className='row-rast'>
              <div className='row-col1'>
                <div className="mobile-student">MOBILE 
                  <br/>
                  <span class="colortext"> STUDENT</span>  
                </div>
                <div className="recover-password">Забыли пароль?</div>
                <div>
                  <button className ='button1' >Войти</button>
                </div>
                <div>
                  <button className ='button1' >Зарегистрироваться</button>
                  </div>
              </div>
              <div className='row-col2'>
                <img className="figures1" src={Main1} alt="logo"  />
                <img className="figures2" src={Main2} alt="logo"  />
              </div>
            </div>
          </div>

        </main>
      </div>
    )
  }
  
  export default Authorization