import React from "react";
import { useTranslation } from "react-i18next";

export default function Filters(props) {
  const {
    changeGender,
    changeFtype,
    changeShape,
    changeColor,
    changeFMaterial,
  } = props;

  const { t } = useTranslation();

  const colors = [
    { name: "black" },
    { name: "blue" },
    { name: "brown" },
    { name: "gold" },
    { name: "green" },
    { name: "gray" },
    { name: "orange" },
    { name: "pink" },
    { name: "purple" },
    { name: "red" },
    { name: "silver" },
    { name: "white" },
    { name: "yellow" },
    { name: "transparent" },
  ];

  const genders = [
    { value: "men", title: "Men" },
    { value: "women", title: "Women" },
    { value: "kids", title: "Kids" },
  ];

  return (
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
            <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
              {genders.map((item) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.value}
                    id="men"
                    name="gender"
                    onChange={(e) => changeGender(e)}
                  />
                  <label className="form-check-label" htmlFor="men">
                    {t(item.title)}
                  </label>
                </div>
              ))}
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
            <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="ful"
                  id="fullrim"
                  name="ftype"
                  onChange={(e) => changeFtype(e)}
                />
                <label className="form-check-label" htmlFor="fullrim">
                  {t("fullrim")}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="half"
                  id="halfrim"
                  name="ftype"
                  onChange={(e) => changeFtype(e)}
                />
                <label className="form-check-label" htmlFor="halfrim">
                  {t("halfrim")}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="less"
                  id="rimless"
                  name="ftype"
                  onChange={(e) => changeFtype(e)}
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
            <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="pilot"
                  id="pilot"
                  name="shape"
                  onChange={(e) => changeShape(e)}
                />
                <label className="form-check-label" htmlFor="pilot">
                  {t("pilot")}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="round"
                  id="round"
                  name="shape"
                  onChange={(e) => changeShape(e)}
                />
                <label className="form-check-label" htmlFor="round">
                  {t("round")}
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="square"
                  id="square"
                  name="shape"
                  onChange={(e) => changeShape(e)}
                />
                <label className="form-check-label" htmlFor="square">
                  {t("square")}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="rectangular"
                  id="rectangular"
                  name="shape"
                  onChange={(e) => changeShape(e)}
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
            <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
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
            <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
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
  );
}
