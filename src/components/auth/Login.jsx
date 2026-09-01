import React from 'react';
import './Signup.css';

const Login = () => {
     return (
       <div className="container text-light login-main">
         <div className="row mt-5 mb-5 vh-100 ">
           <div className="col  d-flex flex-column align-items-center justify-content-center">
             <div className="text-center">
               <span className="mb-3 fw-bold">
                 <img
                   src="./gitnixIconSmall.png"
                   alt="logo"
                   className="gitnix-logo"
                 />
                 GitNix
               </span>
               <h2 className="mb-2">Welcome back</h2>
               <p className="mt-3">
                 Sign in to continue building incredible things.
               </p>
             </div>

             <div className="signupcard">
               <button className="btn w-100 mb-2 google">
                 <i class="fa-brands fa-google me-4"></i>Continue with Google
               </button>
               {/* <button className="btn btn-primary w-100 mt-2">GitHub</button> */}

               <div className="d-flex align-items-center my-2">
                 <hr className="flex-grow-1" style={{ color: "#e6e6e6" }} />
                 <span className="mx-3" style={{ color: "#e6e0e0" }}>
                   or
                 </span>
                 <hr className="flex-grow-1" style={{ color: "#d6d3d3" }} />
               </div>

               <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">
                   Username
                 </label>
                 <input
                   type="username"
                   class="form-control custom-input"
                   id="exampleFormControlInput1"
                   placeholder="name@example.com"
                 />
               </div>

               <div class="mb-4">
                 <label for="exampleFormControlInput1" class="form-label">
                   Password
                 </label>
                 <input
                   type="password"
                   class="form-control custom-input"
                   id="exampleFormControlInput1"
                   placeholder="name@example.com"
                 />
               </div>
               <button className="btn btn-success w-100 mb-3">Sign in</button>

               <p className="small-text mt-1 mb-3 text-center">
                 By creating an account you agree to our Terms of Service and
                 Privacy Policy.
               </p>

               <p className="small-text text-center mb-0">
                 Already have an account? &nbsp;
                 <a href="#">Sign in</a>
               </p>
             </div>
           </div>
         </div>
       </div>
     );
}

export default Login;