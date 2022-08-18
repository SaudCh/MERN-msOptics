import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Category() {
  const { t } = useTranslation();
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/categories/all`)
        .then(function (response) {
          // console.log(response.data.data.data);
          setCategory(response.data.data.data);
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
  return (
    <section className="container-fluid mt-2">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: 'bold' }}>
            {t('Buy glasses at MSH Optics')}
          </h1>
          <p>{t('Rich in Style')}</p>
        </div>

        {category.map((item, index) => (
          <div
            className="col-6 col-md-2 p-1 m-0 my-2"
            onClick={() => navigate(`/category/${item._id}`)}
          >
            <figure className="col-12 border category-image-container overflow-hidden mx-1">
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/img/category/${item.categoryImage}`}
                className="m-0 p-0 col-10 category-image"
                alt=""
              />
            </figure>

            <p className="text-center">Men</p>
          </div>
        ))}
      </div>
    </section>
  );
}
