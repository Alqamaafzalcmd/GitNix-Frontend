import React, { useEffect, useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useAuth } from "../../authContext";
import { Link, useNavigate } from "react-router-dom";

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

const Login = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userId");
  //   setCurrentUser(null);
  // }, [setCurrentUser]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

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

    try {
      let res = await axios.post(
        "http://localhost:8082/user/login",
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true },
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      setCurrentUser(res.data.userId);
      setLoading(false);
      toast.success("Login Successfull", toastConfig);

      navigate("/");
    } catch (err) {
      console.log("Login falied!!", err.message);
      setLoading(false);
       toast.error("Login Failed!!", toastConfig);
    }

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container text-light login-main">
      <div className="row login-row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="login-intro">
            <span className="d-flex align-items-center mb-5 fw-bold brand-name">
              <img
                src="./gitnixIconSmall.png"
                alt="logo"
                className="gitnix-logo"
              />
              GitNix
            </span>
            <h1>Welcome back</h1>
            <h2>Build. Collaborate. Create Impact.</h2>
            <p>Your repositories and your team, all in one workspace.</p>
            <ul className="list-unstyled login-benefits">
              <li>✓ Manage your repositories</li>
              <li>✓ Review and merge code</li>
              <li>✓ Collaborate with your team</li>
              <li>✓ Turn ideas into real products</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center login-form-column">
          <div className="login-form-wrapper ">
            <div className="text-center login-form-top">
              <h2 className="fs-4 mb-1">Login to GitNix</h2>
              <p className="mb-1">Continue building incredible things.</p>
            </div>
            <div className="signupcard">
              <form onSubmit={handleSubmit}>
                <button className="btn w-100 mb-2 google">
                  <i className="fa-brands fa-google me-4"></i>Continue with
                  Google
                </button>
                {/* <button className="btn btn-primary w-100 mt-2">GitHub</button> */}

                <div className="d-flex align-items-center my-2">
                  <hr className="flex-grow-1" style={{ color: "#e6e6e6" }} />
                  <span className="mx-3" style={{ color: "#e6e0e0" }}>
                    or
                  </span>
                  <hr className="flex-grow-1" style={{ color: "#d6d3d3" }} />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    id="password"
                    placeholder="name@example.com"
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                  />
                </div>
                <button
                  className="btn btn-success w-100 mb-3"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "loading ...." : "Login"}
                </button>
              </form>

              <p className="small-text mt-1 mb-3 text-center">
                By creating an account you agree to our Terms of Service and
                Privacy Policy.
              </p>

              <p className="small-text text-center mb-0">
                New to GitNix? &nbsp;
                <Link to="/signup">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
