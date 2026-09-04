import React ,{useState} from "react";
import "./Signup.css";
import {useNavigate, Link} from 'react-router-dom';

import axios from "axios";
import {useAuth} from "../../authContext";

import { toast, Bounce } from "react-toastify";
const toastConfig = {
  position: "top-center",
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

const Signup = () => {

  const navigate = useNavigate();
  
  const [data, setData] = useState({
    username:"",
    email:"",
    password:"",
  });

  const { currentUser, setCurrentUser } = useAuth();

  const [loading, setLoading] = useState(false);


    let handleInputChange = (event) => {
      setData((curr) => {
        curr[event.target.name] = event.target.value;
        return { ...curr };
      });
    };


    let handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      try{
        let res = await axios.post("http://localhost:8082/user/signup",{
          email:data.email,
          password:data.password,
          username:data.username
        },{withCredentials:true})

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId)

        setCurrentUser(res.data.userId);
        setLoading(false);

         navigate("/");
          toast.success(`Welocome ${data.username} to GitNix`, toastConfig);
      }
      catch(err){
        console.error("Error while signup",err.message);
        // alert("signup failed !!");
        setLoading(false);
         toast.error(`Signup Falied!!`, toastConfig);
      }


       setData({
         username: "",
         email: "",
         password: "",
       });


    }

  return (
    <div className="container text-light signup-main">
      <div className="row vh-100 ">
        <div className="col-md-12 col-lg-6 ps-5 mt-5 d-flex align-items-center">
          <div className="intro-block">
            <span className="d-flex align-items-center gap-2 mb-5 fw-bold">
              <img
                src="./gitnixIconSmall.png"
                alt="logo"
                className="gitnix-logo"
              />
              GitNix
            </span>

            <h2 className="mb-2">Create your account</h2>

            <p className="mb-3 ">
              Join engineers who use GitNix to keep their repositories fast,
              legible and easy to collaborate on.
            </p>

            <ul className="list-unstyled">
              <li>
                <img className="tick" src="./greentick.svg" alt="tick" /> &nbsp;
                Host and review code
              </li>
              <li>
                <img className="tick" src="./greentick.svg" alt="tick" />
                &nbsp; Manage projects
              </li>
              <li>
                <img className="tick" src="./greentick.svg" alt="tick" />
                &nbsp; Build software together
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-12 col-lg-5  pt-5 pb-2 ">
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

            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  class="form-control custom-input"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={data.username}
                  onChange={handleInputChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control custom-input"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={data.email}
                  onChange={handleInputChange}
                />
              </div>

              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control custom-input"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={data.password}
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="btn btn-success w-100 mb-3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading ..." : "Create Account "}
              </button>
            </form>

            <p className="small-text mt-1 mb-3 text-center">
              By creating an account you agree to our Terms of Service and
              Privacy Policy.
            </p>

            <p className="small-text text-center mb-0">
              Already have an account? &nbsp;
              <Link to="/auth">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
