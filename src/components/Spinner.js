import React from "react";
import { BounceLoader } from "react-spinners";

function Spinner() {
  return (
    <div>
      <BounceLoader size={72} color="blue" loading />
    </div>
  );
}

export default Spinner;
