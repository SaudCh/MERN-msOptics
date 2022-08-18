import React from 'react';
import ForgotImageImage from '../../Images/forggot.svg';

export default function ForgetPassword() {
  return (
    <section className="container-fluid my-5">
      <div className="row justify-content-center align-items-center">
        <form className="col-11 border py-5 col-md-4">
          <span className="text-center">
            <h5>forgot password</h5>
            <p>Please fill in this form to get verefication</p>
          </span>
          <figure className="text-center">
            <img
              src={ForgotImageImage}
              className="align-self-center col-9"
              style={{ height: 'auto' }}
              alt=""
            />
          </figure>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-12 py-2 mb-3"
            style={{ backgroundColor: '#00aef9', border: 'none' }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
