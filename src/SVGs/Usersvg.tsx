import React from "react";
import usersvg from "./user.svg";
function Usersvg({ className }: any) {
  return (
    <>
      <img src={usersvg} alt="" className={className} />
    </>
  );
}

export default Usersvg;
