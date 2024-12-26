import React from "react";
import left from "../assets/img/left.png";
import { Card, CardContent } from "./ui/card";

const LeftHome = () => {
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full shadow-md flex items-center justify-center">
        <CardContent className="p-0 w-full h-full">
          <img src={left} alt="Left" className="object-cover w-full h-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default LeftHome;
