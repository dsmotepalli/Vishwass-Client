import React from "react";
import passwordhide from "./passwordhide.svg";
import classNames from "classnames";
function Passwordhide({ className }: any) {
  return (
    <>
      <img src={passwordhide} alt="" className={className} />
    </>
  );
}

export default Passwordhide;
