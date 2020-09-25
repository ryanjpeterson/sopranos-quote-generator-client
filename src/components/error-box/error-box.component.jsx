import React from "react";
import "./error-box.styles.css";

const ErrorBox = ({ errors }) => {
  return (
    <div
      className="error-box"
      style={errors === [] ? { display: "flex" } : { display: "hidden" }}
    >
      {errors === [] ? null : errors.map((err) => <p>{err}</p>)}
    </div>
  );
};

export default ErrorBox;
