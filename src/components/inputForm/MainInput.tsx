import React from "react";
interface placeholder {
  name: string;
}
export default function MainInput(props: placeholder) {
  return (
    <div>
      <input
        type="text"
        className="w-[20rem] h-[3rem] mt-5 rounded-[0.25rem]"
        placeholder={props.name}
      />
    </div>
  );
}
