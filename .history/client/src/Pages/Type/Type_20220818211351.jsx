import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../../Components/ProductsCard";
import Image1 from "../../Images/identifletters.jpg";
import Image2 from "../../Images/sunglasses.svg";
import { useTranslation } from "react-i18next";

export default function Item() {
  const { t } = useTranslation();
  const [category, setCategory] = useState([]);
  const type = useParams().type;

  useEffect(() => {
    document.title = type === "sunglasses" ? "Sunglasses" : "Optical";
    setCategory([]);
    const getProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/t/${type}`)
        .then(function (response) {
          setCategory(response.data.products);
        })
        .catch(function (error) {
          const err = {};
          err.api = error.response.data?.message
            ? error.response.data.message
            : error.message;
        });
    };
    getProducts();
  }, [type]);

  return (
    <>
      <section>
        <div className="container-fluid mt-4">
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <img
                  src={type === "sunglasses" ? Image1 : Image2}
                  className="w-100"
                  alt="item"
                />
              </div>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-center">
              <h1 className="text-secondary" style={{ fontSize: 50 }}>
                {type === "sunglasses" ? "Sunglasses" : "Optical"}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("gender")}
              </button>
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="genderDropdown"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    {t("Men")}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    {t("Men")}
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Frame Type
              </button>
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="genderDropdown"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shape
              </button>
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="genderDropdown"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Frame Color
              </button>
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="genderDropdown"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Frame Material
              </button>
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="genderDropdown"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          {category.map((item) => (
            <ProductsCard item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
