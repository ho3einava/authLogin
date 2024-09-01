import React from "react";
import MainInput from "../inputForm/MainInput";
import Button from "./Button";
export default function MainForm() {
  return (
    <div>
      <div className="flex justify-center mt-[6rem]">
        <div className="bg-slate-800 w-[50rem] h-[25rem] rounded-[0.5rem] flex justify-center">
          <div className="  mt-[2.8rem] w-[40rem] h-[20rem] flex flex-col items-center g-4 justify-center ">
            <h1 className="text-white text-3xl bold">Login</h1>
            <MainInput name="userName" />
            <MainInput name="Password" />
            <Button name="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}
