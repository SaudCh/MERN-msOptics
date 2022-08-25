import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Context/AuthContext";
import { WishContext } from "../../Components/Context/WishlistContext";
import LoginImage from "../../Images/login.svg";

export default function Login() {
  document.title = "Login";
  const navigation = useNavigate();
  const auth = useContext(AuthContext);
  const { getWishlist } = useContext(WishContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    setIsLoading(true);

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, data)
      .then(function (response) {
        auth.login(response.data.data.user, response.data.token);
        getWishlist();

        navigation("/");
      })
      .catch(function (error) {
        const err = {};
        err.api = error.response.data?.message
          ? error.response.data.message
          : error.message;
        setErrors(err);
      });

    setIsLoading(false);
  };

  return (
    <section className="container-fluid my-5">
      <div className="row justify-content-center align-items-center">
        <form className="col-11 border py-5 col-md-4" onSubmit={HandleSubmit}>
          <span className="text-center">
            <h5>Login</h5>
            <p>Please fill in this form to get your account.</p>
          </span>
          <figure className="text-center">
            <img
              src={LoginImage}
              className="align-self-center col-9"
              style={{ height: "auto" }}
              alt=""
            />
          </figure>
          {errors.api && (
            <div className="alert alert-danger">
              <p className="errors">{errors.api}</p>
            </div>
          )}
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-primary col-12 py-2 mb-3"
              style={{ backgroundColor: "#00aef9", border: "none" }}
            >
              Login
            </button>
          )}

          <span className="text-center">
            <p className="m-0 p-0">
              <Link className="link-blue" to="/forgotpassword">
                Forget Password
              </Link>
              .{" "}
            </p>
            <p className="m-0 p-0 mt-2">
              don't have an account?{" "}
              <Link className="link-blue" to="/register">
                Signup
              </Link>
              .
            </p>
          </span>
        </form>
      </div>
    </section>
  );
}
