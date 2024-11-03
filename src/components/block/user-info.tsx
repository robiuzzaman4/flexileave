import React from "react";
import { auth } from "@/auth";
import LogoutButton from "@/components/block/logout-button";

const UserInfo = async () => {
  const session = await auth();

  const date = new Date(session?.expires as string);

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = formatter.format(date);

  return (
    <div className="w-full max-w-sm mx-auto space-y-3 bg-card text-card-foreground p-6 rounded-xl border shadow-lg grid gap-3">
      <h3 className="text-2xl font-medium tracking-tighter text-center">
        Welcome to <span className="text-primary">Dashboard</span>
      </h3>
      <span className="grid gap-1">
        <p className="text-sm text-muted-foreground tracking-tighter">
          Name: {session?.user?.name}
        </p>
        <p className="text-sm text-muted-foreground tracking-tighter">
          Email: {session?.user?.email}
        </p>
        <p className="text-sm text-muted-foreground tracking-tighter">
          Session Expire: {formattedDate}
        </p>
      </span>
      <LogoutButton />
    </div>
  );
};

export default UserInfo;
