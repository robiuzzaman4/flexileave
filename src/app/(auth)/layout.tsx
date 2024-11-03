import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-[calc(100vh-56px)] w-full mt-14 flex items-center justify-center px-4">
      {children}
    </div>
  );
};

export default AuthLayout;
