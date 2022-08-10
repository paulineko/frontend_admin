import React from "react";  
import { useFormik } from 'formik';

import Main1 from '../img/main_1.png';
import Main2 from '../img/main_2.png';



const Authorization = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
                <form className="formAutorization" onSubmit={formik.handleSubmit}>
                  <div className='login-autorization'>
                    <input
                      className='login-autorization-input'
                      id="email"
                      name="email"
                      type="email"
                      size="26"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="Email"
                    />
                  </div>
                  <div className='password-autorization'>
                    <input
                      className='password-autorization-input'
                      id="password"
                      name="password"
                      type="password"
                      size="26"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Пароль"
                    />
                  </div>
                  <div className="recover-password">Забыли пароль?</div>
                  <div>
                    <button className ='button1' type="submit">Войти</button>
                  </div>
                  <div>
                    <button className ='button1' >Зарегистрироваться</button>
                  </div>
                </form>
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