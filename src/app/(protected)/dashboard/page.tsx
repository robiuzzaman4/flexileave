import { auth } from "@/auth";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <section className="h-full w-hull">
      <h1>This is Protected Dashboard Page</h1>
      <div>Session: {JSON.stringify(session)}</div>
    </section>
  );
};

export default DashboardPage;
