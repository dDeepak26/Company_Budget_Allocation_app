import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Changesymbol = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY", // Update action type to CHG_CURRENCY
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      currency
      <select
        name="Currency"
        id="Currency"
        onChange={(event) => changeCurrency(event.target.value)}
        className="form-control"
      >
        <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
      </select>
    </div>
  );
};

export default Changesymbol;
