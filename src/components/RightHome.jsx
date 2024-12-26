import React from "react";
import { LoginIcons } from "./LoginIcons";
import Code_Ant from "../assets/img/CodeAnt Ai.png";
import { Button } from "./ui/button";

const RightHome = () => {
  return (
    <div className="w-full max-w-md flex flex-col items-center bg-white shadow-md rounded-lg p-6">
      <img src={Code_Ant} alt="CodeAnt AI" className="w-3/4 max-w-xs object-contain mb-4" />
      <h1 className="text-2xl sm:text-2xl mb-4 font-bold text-center">Welcome to CodeAnt AI</h1>
      <LoginIcons />
      <p className="text-sm text-center mt-4">
        By signing up you agree to <strong>Privacy Policy.</strong>
      </p>
    </div>
  );
};

export default RightHome;