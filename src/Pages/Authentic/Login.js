import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login.css';
import * as Yup from 'yup';
import ConstPlugin from 'webpack/lib/ConstPlugin';

export default function Login() {
  return (
    <div>
      <section class="user-form-part">

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div class="user-form-logo">
                <a href="index.html"><img src={require('../../images/logo.png')} alt="logo" /></a>
              </div>
              <div class="user-form-card">
                <div class="user-form-title">
                  <h2>welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: ''
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Email is Invalid').required('Email is required'),
                    password: Yup.string().required('Password is required').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Minimum 8 characters, at least one letter, one capital letter, one number and one special character'),
                    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password not match').required('confirmPassword is required')

                  })} 
                  onSubmit={(values) => {
                   

                  }}
                  >
                 
                  {({ errors, touched }) => (

                    <Form>
                      <div class="form-group">
                        <Field className={"form-control " + (errors.email && touched.email ? 'is-invalid' : '')} type="email" name="email" placeholder="Enter your email" />
                        <ErrorMessage name='email' component="div" className='invalid-feedback'></ErrorMessage>
                      </div>
                      <div class="form-group">
                        <Field className={"form-control " + (errors.password && touched.password ? 'is-invalid' : '')} type="password" name="password" placeholder="Enter your password" />
                        <ErrorMessage name='password' component="div" className='invalid-feedback'></ErrorMessage>
                      </div>
                      <div class="form-group">
                        <Field className={"form-control " + (errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : '')} type="password" name="confirmPassword" placeholder="Enter your confirmPassword" />
                        <ErrorMessage name='confirmPassword' component="div" className='invalid-feedback'></ErrorMessage>
                      </div>

                      <div class="form-button">

                        <button type="submit">Submit</button>
                      </div>

                    </Form>
                  )
                  }

                


                </Formik>




                {/* <form class="user-form">
                             <div class="form-group"><input type="email" class="form-control" placeholder="Enter your email"/></div>
                            <div class="form-group"><input type="password" class="form-control"  ></div> 
                            <div class="form-button"><button type="submit">login</button>
                                <p>Forgot your password?<a href="reset-password.html">reset here</a></p>
                            </div>
                        </form>  */}
              </div>
              <div class="user-form-remind">
                <p>Don't have any account?<a href="register.html">register here</a></p>
              </div>
              <div class="user-form-footer">
                <p>Organe | &COPY; Copyright by <a href="#">Mironcoder</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
