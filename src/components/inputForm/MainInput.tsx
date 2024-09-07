import React from "react";

interface Inputs {
  name: string;
  register: any;
  type: string;
}
const MainInput: React.FC<Inputs> = ({name, register, type}) => {
  return (
    <div>
      <input
        type={type}
        className="w-[20rem] h-[3rem] mt-5 rounded-[0.25rem]"
        {...register(name)}
        placeholder={name}
      />
    </div>
  );
};
export default MainInput;
