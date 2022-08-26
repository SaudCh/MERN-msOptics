import React, { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { AuthContext } from "../../Components/Context/AuthContext";
import {
  DecrementIcon,
  IncrementIcon,
  TrashIcon,
} from "../../Components/icons";
import PayButton from "../../Components/PayButton";
import { formatCurrency } from "../../Components/utils/currencyFormater";

export default function Cart() {
  document.title = "Cart";
  const { cart, removeAll, removeItem, total, IncQuantity, DecQuantity } =
    useContext(CartContext);
  const { user } = useContext(AuthContext);

  if (cart.length === 0) {
    return (
      <div
        className="cart d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="text-center">
          <h1>Cart</h1>
          <p>There are no items in your cart.</p>
        </div>
      </div>
    );
  }
  return (
    <section
      className="container-fluid mt-3 pt-2 "
      style={{ minHeight: "72vh" }}
    >
      <div className="row justify-content-center align-items-center align-items-md-start flex-column-reverse flex-md-row">
        <div
          className="col-11 col-md-9 bg-light border rounded p-2 mt-3 mt-md-0"
          style={{ minHeight: "50vh" }}
        >
          <div className="d-flex justify-content-between">
            <p className="h4">Cart</p>
            <button
              className="btn btn-sm text-white"
              style={{ backgroundColor: "#373B3C" }}
              onClick={() => removeAll()}
            >
              Remove All
            </button>
          </div>
          {cart.map((e) => (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <figure className="rounded overflow-hidden border">
                    <img
                      src={`${process.env.REACT_APP_SERVER_URL}/img/products/${e.image}`}
                      alt=""
                      width="100"
                      height="100"
                    />
                  </figure>
                  <div className="ms-1">
                    <p className="h6 p-0 m-0">{e.title}</p>
                    <p className="p-0 m-0 text-success fw-bold">
                      {formatCurrency(e.price)}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="p-0 m-0 text-success fw-bold">
                    {formatCurrency(e.price)}
                  </p>
                  <div className="border d-flex rounded overflow-hidden bg-white">
                    <button
                      className="btn px-2 py-1 cart-icon border-end"
                      onClick={() => DecQuantity(e.id)}
                    >
                      <DecrementIcon />
                    </button>
                    <div>
                      <p className="m-0 px-3 py-1">{e.quantity}</p>
                    </div>
                    <button
                      className="btn px-2 py-1 cart-icon border-start"
                      onClick={() => IncQuantity(e.id)}
                    >
                      <IncrementIcon />
                    </button>
                  </div>
                </div>
                <div className="">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(e.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
        <div className="col-11 col-md-2">
          <div className="bg-light border p-2 rounded">
            <div className="d-flex justify-content-between">
              <p className="p-0 m-0">Subtotal</p>
              <p className="p-0 m-0">{formatCurrency(total)}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="p-0 m-0">Delivery Charges</p>
              <p className="p-0 m-0">Total</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="p-0 m-0">Total</p>
              <p className="p-0 m-0">{formatCurrency(total)}</p>
            </div>
            <div className="text-end">
              <PayButton cart={cart} user={user} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <PayButton cart={cart} user={user} />
          </div>
        </div>
      </div>
    </section>
  );
}
