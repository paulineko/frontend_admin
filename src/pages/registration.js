import React from 'react';
import { useFormik } from 'formik';

import Main1 from '../img/main_1.png';
import Main2 from '../img/main_2.png';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Обязательно для заполнения';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Такой почты не существует';
  }

  if (!values.password) {
    errors.password = 'Обязательно для заполнения';
  } else if (values.password.length > 20) {
    errors.password = 'Должно быть не менее 20 символов';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Обязательно для заполнения';
  } else if (values.repeatPassword =! values.password) {
    errors.password = 'Пароли не совпадают';
  }

  return errors;
};

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

    return (
      <div>
        <main>
          <div class = "container-registration">
            <div className='row-rast'>
              <div className='row-col1'>
                <div className="mobile-student">MOBILE 
                  <br/>
                  <span class="colortext"> STUDENT</span>  
                </div>
                <form className="form-registration" onSubmit={formik.handleSubmit}>
                  <div className='login-registration'>
                    <input
                      className='login-registration-input'
                      id="email"
                      name="email"
                      type="email"
                      size="26"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="Email"
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                  </div>
                  <div className='password-registration'>
                    <input
                      className='password-autorization-input'
                      id="password"
                      name="password"
                      type="password"
                      size="26"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Придумайте пароль"
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                  </div>
                  <div className='password-registration'>
                    <input
                      className='repeatPassword-registration-input'
                      id="repeatPassword"
                      name="repeatPassword"
                      type="password"
                      size="26"
                      onChange={formik.handleChange}
                      value={formik.values.repeatPassword}
                      placeholder="Повторите пароль"
                    />
                    {formik.errors.repeatPassword ? <div>{formik.errors.repeatPassword}</div> : null}

                  </div>
                  <div>
                    <button className ='button1' type="submit">Зарегистрироваться</button>
                  </div>
                  <div>
                    <button className ='button1' >У меня уже есть аккаунт</button>
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
  
  export default Registration