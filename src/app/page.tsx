import React from "react";
import { auth } from "@/auth";

const HomePage = async () => {
  const session = await auth();
  console.log("session", session);

  return (
    <div className="p-20">
      <h1>Hello</h1>
    </div>
  );
};

export default HomePage;
