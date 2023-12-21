"use client";
import Link from "next/link";
import { useState } from "react";

function AuthLinks() {
  const status = "notauthenticated"; // temporary
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="hidden sm:flex">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:flex">
            Write
          </Link>
          <span className="cursor-pointer hidden sm:flex">Logout</span>
        </>
      )}
      <div className="flex items-center">
        <div
          className="w-5 h-4 flex sm:hidden flex-col justify-between cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-full h-[2px] bg-black" />
          <div className="w-full h-[2px] bg-black" />
          <div className="w-full h-[2px] bg-black" />
        </div>
      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-white h-vh-minus-100px w-full flex flex-col items-center justify-center gap-12 text-3xl">
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
