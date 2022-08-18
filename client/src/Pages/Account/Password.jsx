import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Components/Context/AuthContext';
import { toast } from 'react-toastify';

export default function Password() {
  const auth = useContext(AuthContext);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState('');
  const [data, setData] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setErrors('');
    setLoading(true);

    const config = {
      headers: { Authorization: `Bearer ${auth?.token}` },
    };

    await axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/api/users/updateMyPassword`,
        data,
        config
      )
      .then(function (response) {
        auth.login(response.data.data.user, response.data.token);
        setData({
          passwordCurrent: '',
          password: '',
          passwordConfirm: '',
        });

        toast.success('Password Updated', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(function (error) {
        const err = {};
        err.api = error.response.data?.message
          ? error.response.data.message
          : error.message;
        setErrors(err);
      });

    setLoading(false);
  };

  return (
    <>
      <hr className="my-4" />
      <section className="container-fluid mb-5">
        <form className="row" onSubmit={handleSubmit}>
          {errors.api && (
            <div className="alert alert-danger col-12">{errors.api}</div>
          )}
          <h3>Change password</h3>
          <div className="mb-3 col-11 col-md-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="passwordCurrent"
              value={data.passwordCurrent}
              onChange={handleChange}
              placeholder="***********"
              className="form-control"
              id="password"
            />
          </div>

          <div className="mb-3 col-11 col-md-6">
            <label htmlFor="newpassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="New Password"
              className="form-control"
              id="newpassword"
            />
          </div>

          <div className="mb-3 col-11 col-md-6">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordConfirm"
              value={data.passwordConfirm}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="form-control"
              id="confirmpassword"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-4"
            style={{ backgroundColor: '#00aef9', border: 0 }}
            disabled={loading}
          >
            Save
          </button>
        </form>
      </section>
    </>
  );
}
