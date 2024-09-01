import React from "react";
import MainInput from "../inputForm/MainInput";
import Button from "../loginForm/Button";

export default function MainForm() {
  return (
    <div>
      <div className="flex justify-center mt-[6rem]">
        <div className="bg-slate-800 w-[50rem] h-[25rem] rounded-[0.5rem] flex justify-center">
          <div className="  mt-[2.8rem] w-[40rem] h-[20rem] flex flex-col items-center g-4 justify-center ">
            <h1 className="text-white text-3xl bold">SignUp</h1>
            <MainInput name="userName" />
            <MainInput name="Password" />
            <MainInput name="RePassword" />
            <Button name="SignUp" />
          </div>
        </div>
      </div>
    </div>
  );
}
