import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

const Dashboard = ({ price, data }) => {
  console.log("props", price, data);
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }
  console.log("price", price);
  return (
    <div className="dashboard">
      <h2>{`$${price}`}</h2>
      <h1>hellow world!</h1>
      <div className="chart-container">
        <Line data={data} option={opts} />
      </div>
    </div>
  );
};

export default Dashboard;
