import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Components/Context/AuthContext";
import { WishContext } from "../../Components/Context/WishlistContext";
import axios from "axios";
import { formatCurrency } from "../../Components/utils/currencyFormater";

export default function Wishlist() {
  document.title = "Wishlist";
  const { removeFromWishlist } = useContext(WishContext);
  const auth = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  const deleteFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.product.id !== id));

    removeFromWishlist(id);
  };

  useEffect(() => {
    const getWishlist = async () => {
      const config = {
        headers: { Authorization: `Bearer ${auth?.token}` },
      };

      await axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/api/favourite/${auth.user.id}?pop=product`,
          config
        )
        .then(function (response) {
          setWishlist(response.data.data.favourit);
        })
        .catch(function (error) {
          const err = {};
          err.api = error.response.data?.message
            ? error.response.data.message
            : error.message;
        });
    };

    getWishlist();
  }, [auth?.token, auth.user?.id]);

  if (wishlist.length === 0) {
    return (
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: "72vh" }}
      >
        <div className="text-center">
          <h3 className="text-secondary h2">WishList</h3>
          <h3 className="text-secondary">There is Nothing here</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {wishlist.map((item, index) => {
        const { product } = item;
        const { title, price, images, id } = product;
        return (
          <div className="row align-items-center">
            <div className="col-1">{index + 1}</div>

            <div className="col-4 d-flex align-items-center flex-column flex-md-row">
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/img/products/${images[0]}`}
                width="100"
                alt=""
              />
              <div className="ms-2">
                <p className="m-0 p-0">{title}</p>
                <p className="m-0 p-0 text-success">{formatCurrency(price)}</p>
              </div>
            </div>
            <div className="col-7">
              <button
                className="btn me-3 text-white btn-sm"
                style={{ backgroundColor: "rgb(55, 59, 60)" }}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteFromWishlist(id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
