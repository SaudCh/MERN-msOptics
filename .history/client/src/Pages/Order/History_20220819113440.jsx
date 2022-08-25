import React, { useState } from "react";

export default function History() {
  document.title = "Order History mhOptics";
  const [orders, setOrders] = useState([]);

  if (orders.length === 0) {
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

  return <div>History</div>;
}
