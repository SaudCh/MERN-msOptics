import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthContext';
import RegisterImage from '../../Images/register.svg';
import { signupValidation } from './registerValidation';

export default function Register() {
  document.title = 'Register';
  const auth = useContext(AuthContext);
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState('');

  const HandleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstname,
      lastName: lastname,
      passwordConfirm: confirmPassword,
      email: email,
      password: password,
    };

    const error = signupValidation(data);

    setErrors(error);
    if (Object.keys(error).length !== 0) {
      return;
    }
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/users/signup`, data)
      .then(function (response) {
        auth.login(response.data.data.user, response.data.token);
        navigation('/');
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
            <h5>Signup</h5>
            <p>Please fill in this form to create an account.</p>
          </span>
          <figure className="text-center">
            <img
              src={RegisterImage}
              className="align-self-center col-9"
              style={{ height: 'auto' }}
              alt=""
            />
          </figure>
          {errors.api && (
            <div className="alert alert-danger">
              <p className="errors">{errors.api}</p>
            </div>
          )}

          <div className="my-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Enter First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="errors">{errors.firstName} </p>}
          </div>

          <div className="my-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="errors">{errors.lastName} </p>}
          </div>

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
            {errors.email && <p className="errors">{errors.email} </p>}
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
            {errors.password && <p className="errors">{errors.password} </p>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.passwordConfirm && (
              <p className="errors">{errors.passwordConfirm} </p>
            )}
          </div>

          <div className="mb-3 form-check m-0 p-0 text-center">
            <label
              className="form-check-label fw-bold m-0 p-0"
              htmlFor="exampleCheck1"
            >
              By creating an account you agree to our{' '}
              <Link className="link-blue" to="/">
                Terms & Condition
              </Link>
              .
            </label>
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
              style={{ backgroundColor: '#00aef9', border: 'none' }}
            >
              Register
            </button>
          )}
          <span className="text-center">
            <p className="m-0 p-0 mt-2">
              Already have an account?{' '}
              <Link className="link-blue" to="/login">
                Login
              </Link>
              .
            </p>
          </span>
        </form>
      </div>
    </section>
  );
}
