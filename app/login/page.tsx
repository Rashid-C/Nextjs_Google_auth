"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Login() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center">
      {!session ? (
        <button onClick={() => signIn()} className="p-4 font-bold">
          Login{""}
        </button>
      ) : (
        <button className="p-4 font-bold" onClick={() => signOut()}>
          LOGOUT{""}
        </button>
      )}
      {session && (
        <div>
          <h2>Name : {session?.user?.name}</h2>
          <img src={session?.user?.image} alt="img" />
        </div>
      )}
    </div>
  );
}

export default Login;
