import {error} from "console";
import React from "react";

interface Inputs {
  name: string;
  error?: string;
  register: any;
  mainType: string;
}
const MainInput = (props: Inputs) => {
  return (
    <div>
      <input
        type={props.mainType}
        className="w-[20rem] h-[3rem] mt-5 rounded-[0.25rem]"
        {...props.register(props.name, {required: true})}
        placeholder={props.name}
        {...(props.error && (
          <p className="text-sm text-red-900">{props.error}</p>
        ))}
      />
    </div>
  );
};
export default MainInput;
