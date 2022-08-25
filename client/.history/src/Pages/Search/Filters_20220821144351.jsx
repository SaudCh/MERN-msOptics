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

  const genders = [
    { value: "men", title: "Men" },
    { value: "women", title: "Women" },
    { value: "kids", title: "Kids" },
  ];

  const frameTypes = [
    { value: "full", title: "fullrim" },
    { value: "half", title: "halfrim" },
    { value: "less", title: "rimless" },
  ];

  const shapes = [
    { value: "pilot", title: "pilot" },
    { value: "round", title: "round" },
    { value: "square", title: "square" },
    { value: "rectangl", title: "rectangular" },
    { value: "browline", title: "browline" },
  ];

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

  const frameMaterials = [
    { value: "metal", title: "metal" },
    { value: "plastic", title: "plastic" },
    { value: "titanium", title: "titanium" },
  ];

  return (
    <section className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center">
        {/* Gender */}
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

        {/* Type */}
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
              {frameTypes.map((item) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.value}
                    name="ftype"
                    onChange={(e) => changeFtype(e)}
                  />
                  <label className="form-check-label" htmlFor="fullrim">
                    {t(item.title)}
                  </label>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/* Shape */}
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
              {shapes.map((item) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.value}
                    name="shape"
                    onChange={(e) => changeShape(e)}
                  />
                  <label className="form-check-label" htmlFor="pilot">
                    {t(item.title)}
                  </label>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/* Colors */}
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
              {colors.map(({ name }) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={name}
                    onChange={(e) => changeColor(e)}
                  />
                  <label className="form-check-label" htmlFor="black">
                    {name}
                  </label>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/* Material */}
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
              {frameMaterials.map((item) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.value}
                    id="metal"
                    name="fMaterial"
                    onChange={(e) => changeFMaterial(e)}
                  />
                  <label className="form-check-label" htmlFor="metal">
                    metal
                  </label>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
