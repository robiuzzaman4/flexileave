import React from "react";
import { auth } from "@/auth";

const HomePage = async () => {
  const session = await auth();
  console.log("session", session);

  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-center max-w-lg mx-auto py-14">
        Welcome to the ultimate next-auth authentication system.
      </h1>
    </section>
  );
};

export default HomePage;
