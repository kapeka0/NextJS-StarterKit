"use client";

import { ThreeDots } from "react-loader-spinner";

function ScreenLoader() {
  console.log("ScreenLoader");
  return (
    <div className="h-screen w-screen flex justify-center items-center z-1000 ">
      <ThreeDots color="#0bcdfe" visible width="60" />
    </div>
  );
}

export default ScreenLoader;
