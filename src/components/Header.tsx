import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="bg-slate-950 h-[5rem] flex items-center ps-5 text-white">
        <Link href={`/`} className="ms-5">
          Home
        </Link>
        <Link href={`/login`} className="ms-5">
          Login
        </Link>
        <Link href={`/signUp`} className="ms-5">
          SignUp
        </Link>
      </div>
    </div>
  );
}
