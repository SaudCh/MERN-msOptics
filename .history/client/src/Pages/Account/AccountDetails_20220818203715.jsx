import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/Context/AuthContext';
import { getCountries } from '../../Data/allCountries';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AccountDetails() {
  const auth = useContext(AuthContext);

  const [errors, setErrors] = useState('');
  const country = getCountries();
  const [loading, setLoading] = useState(false);

  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
    country: '',
  });

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${auth?.token}` },
    };

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/users/me`, config)
      .then(function (response) {
        const user = response.data.data.data;

        setAccount({
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          phone: user?.phone,
          street: user?.street,
          city: user?.city,
          postalCode: user?.postalCode,
          country: user?.country,
        });
      })
      .catch(function (error) {
        const err = {};
        err.api = error.response.data?.message
          ? error.response.data.message
          : error.message;
        setErrors(err);
      });
  }, [auth?.token]);

  function handleChange(evt) {
    const value = evt.target.value;
    setAccount({
      ...account,
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
        `${process.env.REACT_APP_SERVER_URL}/api/users/updateMe`,
        account,
        config
      )
      .then(function (response) {
        // console.log(response.data.status);
        toast.success('User Info Updated', {
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
    <section className="container-fluid">
      <form className="row" onSubmit={handleSubmit}>
        {errors.api && (
          <div className="alert alert-danger col-12">{errors.api}</div>
        )}
        <h3>Account Details</h3>
        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            name="firstName"
            value={account.firstName}
            onChange={handleChange}
            id="fname"
          />
        </div>
        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={account.lastName}
            onChange={handleChange}
            className="form-control"
            id="lname"
          />
        </div>

        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={account.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-control"
            id="email"
          />
        </div>

        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={account.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="form-control"
            id="phone"
          />
        </div>

        <hr className="my-4" />

        <h3>Delivery address</h3>
        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            name="street"
            value={account.street}
            onChange={handleChange}
            placeholder="Street"
            className="form-control"
            id="street"
          />
        </div>
        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            name="city"
            value={account.city}
            onChange={handleChange}
            placeholder="City"
            className="form-control"
            id="city"
          />
        </div>

        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="postalcode" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={account.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="form-control"
            id="postalcode"
          />
        </div>

        <div className="mb-3 col-11 col-md-6">
          <label htmlFor="phone" className="form-label">
            Country
          </label>
          <select
            className="form-select"
            name="country"
            value={account.country}
            onChange={handleChange}
            aria-label="Default select example"
          >
            {country.map((country) => (
              <option value={country.name}>{country.name}</option>
            ))}
          </select>
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
  );
}
