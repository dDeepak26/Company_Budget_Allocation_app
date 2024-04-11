import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext); // Include currency from context
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency}
        {budget - totalExpenses}
      </span>{" "}
      {/* Use currency from context */}
    </div>
  );
};

export default Remaining;
