import React from 'react'

export default function Register() {
  return (
    <div>
        <section class="user-form-part">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <div class="user-form-logo">
                        <a href="index.html"><img src={require('../../images/logo.png')} alt="logo"/></a>
                    </div>
                    <div class="user-form-card">
                        <div class="user-form-title">
                            <h2>Join Now!</h2>
                            <p>Setup A New Account In A Minute</p>
                        </div>
                        <form class="user-form">
                            <div class="form-group"><input type="text" class="form-control" placeholder="Enter your name"/></div>
                            <div class="form-group"><input type="email" class="form-control" placeholder="Enter your email"/></div>
                            <div class="form-group"><input type="password" class="form-control" placeholder="Enter your password"/></div>
                            <div class="form-group"><input type="password" class="form-control" placeholder="Enter repeat password"/></div>
                            <div class="form-button"><button type="submit">register</button></div>
                        </form>
                    </div>
                    <div class="user-form-remind">
                        <p>Already Have An Account?<a href="login.html">login here</a></p>
                    </div>
                    <div class="user-form-footer">
                        <p>Organe | &COPY; Copyright by <a href="#">Mironcoder</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <script src="js/vendor/jquery-1.12.4.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script> */}
    </div>
  )
}
