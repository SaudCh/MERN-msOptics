import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCard from "../../Components/ProductsCard";
import Image1 from "../../Images/identifletters.jpg";
import { useTranslation } from "react-i18next";

export default function Search() {
  const { t } = useTranslation();
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState([]);

  const changeCheckbox = (e) => {
    if (e.target.checked) {
      setGender([...gender, e.target.value]);
    } else {
      setGender(gender.filter((item) => item !== e.target.value));
    }

    console.log(gender);
  };

  useEffect(() => {
    document.title = "Search";
    setCategory([]);
    const getProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/`)
        .then(function (response) {
          setCategory(response.data.data.data);
          setFilter(response.data.data.data);
          console.log(response.data.data.data);
        })
        .catch(function (error) {
          const err = {};
          err.api = error.response.data?.message
            ? error.response.data.message
            : error.message;
        });
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFilter(
      category.filter((item) => {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) &&
          gender.forEach((e) => {
            console.log(item)
          })
        );
      })
    );
  }, [search, gender, category]);

  const searchProduct = (e) => {
    // const search = e.target.value;
    // const filtered = category.filter((item) => {
    //   return item.title.toLowerCase().includes(search.toLowerCase());
    // });
    // setFilter(filtered);
    setSearch(search);
  };

  return (
    <>
      <section>
        <div className="container-fluid mt-4">
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <img src={Image1} className="w-100" alt="item" />
              </div>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-center">
              <h1 className="text-secondary" style={{ fontSize: 50 }}>
                Search
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div class="row justify-content-center">
          <div class="form-outline col-9">
            <input
              type="search"
              placeholder="Search"
              id="search"
              class="form-control"
              onChange={(e) => searchProduct(e)}
            />
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
                    value="men"
                    id="men"
                    name="gender"
                    onChange={(e) => changeCheckbox(e)}
                  />
                  <label className="form-check-label" htmlFor="men">
                    {t("Men")}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="women"
                    id="women"
                    name="gender"
                    onChange={(e) => changeCheckbox(e)}
                  />
                  <label className="form-check-label" htmlFor="women">
                    {t("Women")}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="kids"
                    id="kids"
                    name="gender"
                    onChange={(e) => changeCheckbox(e)}
                  />
                  <label className="form-check-label" htmlFor="kids">
                    {t("Kids")}
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
                {t("Frame_type")}
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
                    id="fullrim"
                  />
                  <label className="form-check-label" htmlFor="fullrim">
                    {t("fullrim")}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="halfrim"
                  />
                  <label className="form-check-label" htmlFor="halfrim">
                    {t("halfrim")}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rimless"
                  />
                  <label className="form-check-label" htmlFor="rimless">
                    {t("rimless")}
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
                {t("Shapes")}
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
                    id="pilot"
                  />
                  <label className="form-check-label" htmlFor="pilot">
                    {t("pilot")}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="round"
                  />
                  <label className="form-check-label" htmlFor="round">
                    {t("round")}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="square"
                  />
                  <label className="form-check-label" htmlFor="square">
                    {t("square")}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rectangular"
                  />
                  <label className="form-check-label" htmlFor="rectangular">
                    {t("rectangular")}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="browline"
                  />
                  <label className="form-check-label" htmlFor="browline">
                    {t("browline")}
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
                {t("Frame_colour")}
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
                    id="black"
                  />
                  <label className="form-check-label" htmlFor="black">
                    Black
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="blue"
                  />
                  <label className="form-check-label" htmlFor="blue">
                    Blue
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="brown"
                  />
                  <label className="form-check-label" htmlFor="brown">
                    Brown
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="gold"
                  />
                  <label className="form-check-label" htmlFor="gold">
                    Gold
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="green"
                  />
                  <label className="form-check-label" htmlFor="green">
                    Green
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="gray"
                  />
                  <label className="form-check-label" htmlFor="gray">
                    Gray
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="orange"
                  />
                  <label className="form-check-label" htmlFor="orange">
                    Orange
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="pink"
                  />
                  <label className="form-check-label" htmlFor="pink">
                    Pink
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="purple"
                  />
                  <label className="form-check-label" htmlFor="purple">
                    Purple
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="red"
                  />
                  <label className="form-check-label" htmlFor="red">
                    Red
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="silver"
                  />
                  <label className="form-check-label" htmlFor="silver">
                    Silver
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="transparent"
                  />
                  <label className="form-check-label" htmlFor="transparent">
                    Transparent
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="white"
                  />
                  <label className="form-check-label" htmlFor="white">
                    White
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="yellow"
                  />
                  <label className="form-check-label" htmlFor="yellow">
                    Yellow
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
                {t("Frame material")}
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
                    id="metal"
                  />
                  <label className="form-check-label" htmlFor="metal">
                    metal
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="plastic"
                  />
                  <label className="form-check-label" htmlFor="plastic">
                    plastic
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="titanium"
                  />
                  <label className="form-check-label" htmlFor="titanium">
                    titanium
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          {filter.map((item) => (
            <ProductsCard item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
