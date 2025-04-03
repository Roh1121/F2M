import React from "react";
import "./Orders.css";

const Orders = () => {
  const orders = [
    { id: 1, product: "Organic Apples", buyer: "Balayya", status: "Delivered" },
    { id: 2, product: "Tomato", buyer: "Mallappa", status: "Pending" },
    { id: 3, product: "Lemon", buyer: "Sagar", status: "Shipped" },
  ];

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Buyer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.buyer}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
