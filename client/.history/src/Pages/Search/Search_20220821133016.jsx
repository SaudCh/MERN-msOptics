import React from "react";
import ProductsCard from "../../Components/ProductsCard";
import Image1 from "../../Images/identifletters.jpg";
import useSearch from "./useSearch";
import Filters from "./Filters";

export default function Search() {
  const {
    filter,
    searchProduct,
    changeGender,
    changeFtype,
    changeShape,
    changeColor,
    changeFMaterial,
  } = useSearch();

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
      <Filters
        changeGender={changeGender}
        changeFtype={changeFtype}
        changeShape={changeShape}
        changeColor={changeColor}
        changeFMaterial={changeFMaterial}
      />

      <section className="container-fluid">
        <div className="row">
          {filter.length > 0 ? (
            filter.map((item) => <ProductsCard item={item} />)
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "30vh" }}
            >
              <h1 className="text-center mt-5 text-secondary">
                No products found
              </h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
