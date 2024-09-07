import React, {useState} from "react";
import MainInput from "../inputForm/MainInput";
import Button from "../inputForm/Button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {login, LoginPayload} from "@/src/services/authService";
import {useRouter} from "next/router";

const formSchema = z.object({
  userName: z
    .string()
    .min(2, {message: " نام کاربری اجباری است"})
    .max(10, {message: "نام کاربری طولانی است"}),
  password: z
    .string()
    .min(2, {message: "رمز عبور اجباری است"})
    .max(10, {message: "رمز عبور طولانی است"}),
});
type FormData = z.infer<typeof formSchema>;
type Inputs = {
  userName: string;
  password: string;
};

const MainForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({resolver: zodResolver(formSchema)});

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const loginPayload: LoginPayload = {
        userType: "COMPANY",
        passwordAuth: {
          username: data.userName,
          password: data.password,
        },
      };

      const response = await login(loginPayload);
      console.log("login successful, Token:", response.token);
      router.push("/");
    } catch (error) {
      setError("خطا در ورود مجددا تلاش کنید");
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-[6rem]">
        <div className="bg-slate-800 w-[50rem] h-[25rem] rounded-[0.5rem] flex justify-center">
          <div className="mt-[2.8rem] w-[40rem] h-[20rem] flex flex-col items-center gap-4 justify-center">
            <h1 className="text-white text-3xl bold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <MainInput name="userName" register={register} type="text" />
              {errors.userName && (
                <p className="text-sm text-red-900  font-bold mt-5">
                  {errors.userName?.message}
                </p>
              )}

              <MainInput name="password" register={register} type="password" />
              {errors.password && (
                <p className="text-sm text-red-900  font-bold mt-5">
                  {errors.password?.message}
                </p>
              )}
              <Button name="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainForm;
