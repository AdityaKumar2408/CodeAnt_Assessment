import React from "react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";

const LoginPage = () => {
  return (
    <div className="h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-white">
        <LeftHome />
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#FAFAFA]">
        <RightHome />
      </div>
    </div>
  );
};

export default LoginPage;
