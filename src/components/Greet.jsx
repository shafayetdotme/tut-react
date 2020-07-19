import React from "react";

// Functional Component
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Function: {props.name} A.K.A. {props.shortName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
