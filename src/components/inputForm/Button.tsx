import React from "react";
interface PropType {
  name: string;
}
export default function Button(props: PropType) {
  return (
    <div>
      <button className="bg-blue-900 text-white bold w-[8rem] h-[3rem] rounded-[0.25rem] mt-[2rem]">
        {props.name}
      </button>
    </div>
  );
}
