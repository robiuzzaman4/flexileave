import React from "react";
import UserInfo from "@/components/block/user-info";

const DashboardPage = () => {

  return (
    <section className="w-full h-full max-w-screen-md mx-auto px-4 py-14">
      {/* <div>Session: {JSON.stringify(session)}</div> */}
      <UserInfo />
    </section>
  );
};

export default DashboardPage;
