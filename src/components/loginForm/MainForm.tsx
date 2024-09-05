import React from "react";
import MainInput from "../inputForm/MainInput";
import Button from "../inputForm/Button";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
  userName: string;
  password: string;
};

export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center mt-[6rem]">
        <div className="bg-slate-800 w-[50rem] h-[25rem] rounded-[0.5rem] flex justify-center">
          <div className="mt-[2.8rem] w-[40rem] h-[20rem] flex flex-col items-center gap-4 justify-center">
            <h1 className="text-white text-3xl bold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <MainInput
                error={errors.userName?.message}
                name="userName"
                register={register}
                mainType="text"
              />

              <MainInput
                error={errors.password?.message}
                name="password"
                register={register}
                mainType="password"
              />

              <Button name="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
