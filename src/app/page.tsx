import React from "react";
import SigninForm from "@/components/ui/auth/signin-form";
import { auth } from "@/auth";

const HomePage = async() => {
  const session = await auth();
  console.log("session", session);
  
  
  return (
    <div className="p-20">
      <SigninForm />


    </div>
  );
};

export default HomePage;
