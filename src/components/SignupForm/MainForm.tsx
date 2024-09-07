import React from "react";
import MainInput from "../inputForm/MainInput";
import Button from "../inputForm/Button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z
  .object({
    userName: z
      .string()
      .min(2, {message: "نام کاربری اجباری است"})
      .max(10, {message: "نام کاربری طولانی است"}),

    password: z
      .string()
      .min(3, {message: "طول پسورد باید بالای 3 کارکتر باشد"})
      .max(10, {message: "پسورد طولانی است"}),
    confirmPassword: z
      .string()
      .min(3, {message: "پسورد را دوباره وارد کنید"})
      .max(10, {message: "پسورد طولانی است"}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "پسورد ها یکسان نیستند",
  });

type FormData = z.infer<typeof formSchema>;
type Inputs = {
  userName: string;
  password: string;
  confirmPassword: string;
};
export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center mt-[6rem]">
        <div className="bg-slate-800 w-[50rem] h-[25rem] rounded-[0.5rem] flex justify-center">
          <div className="  mt-[2.8rem] w-[40rem] h-[20rem] flex flex-col items-center g-4 justify-center ">
            <h1 className="text-white text-3xl bold">SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <MainInput name="userName" register={register} type="text" />
              {errors.userName && (
                <p className="text-sm text-red-900  font-bold mt-3">
                  {errors.userName?.message}
                </p>
              )}
              <MainInput name="password" register={register} type="password" />
              {errors.password && (
                <p className="text-sm text-red-900  font-bold mt-3">
                  {errors.password?.message}
                </p>
              )}
              <MainInput
                name="confirmPassword"
                register={register}
                type="password"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-900  font-bold mt-3">
                  {errors.confirmPassword?.message}
                </p>
              )}
              <Button name="SignUp" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
