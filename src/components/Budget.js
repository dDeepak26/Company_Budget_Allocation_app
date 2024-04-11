import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const {
    budget: initialBudget,
    currency,
    expenses,
    dispatch,
  } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(initialBudget);

  const handleBudgetChange = (event) => {
    const updatedBudget = parseInt(event.target.value);
    const totalSpending = getTotalSpending(expenses);

    if (updatedBudget < totalSpending) {
      alert("Budget cannot be lower than total spending!");
      return; // Exit the function and do not update the budget
    }

    if (updatedBudget > 20000) {
      alert("Maximum budget limit exceeded (20,000)!");
      return; // Exit the function and do not update the budget
    }

    setNewBudget(updatedBudget); // Update local state
    dispatch({ type: "SET_BUDGET", payload: updatedBudget }); // Dispatch action to update global state
  };

  const getTotalSpending = (expenses) => {
    // Calculate total spending from expenses
    return expenses.reduce((total, item) => total + item.cost, 0);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        min="0"
        max="20000"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
