import React from "react";
import Auxiliary from "../../hoc/auxiliary";
import Headers from "../header/headers";

const layout = (props) => (
  <div className="full">
    <Auxiliary>
      <Headers />
      {props.children}
    </Auxiliary>
  </div>
);
export default layout;
