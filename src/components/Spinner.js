import React from "react";
import { BounceLoader } from "react-spinners";

function Spinner({ loading }) {
  return (
    <div className="mt-5">
      <BounceLoader size={72} color="blue" loading={loading} />
    </div>
  );
}

export default Spinner;
