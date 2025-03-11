import React from "react";

type Props = {
  title: string;
  message: string;
  children: React.ReactNode;
};
const BuisnessMessage = ({ title, message, children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md space-y-3">
      <h1 className="text-3xl font-bold text-center">{title}</h1>

      <div className="flex w-full justify-center items-center">{children}</div>
      <p className=" lg:text-lg text-center text-muted-foreground">{message}</p>
    </div>
  );
};

export default BuisnessMessage;
