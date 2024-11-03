import React from "react";
import UserInfo from "@/components/block/user-info";
import { auth } from "@/auth";
import { getAllUsers } from "@/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DashboardPage = async () => {
  const session = await auth();
  const { data: users } = await getAllUsers(session?.user?.id as string);

  return (
    <section className="w-full h-full max-w-screen-md mx-auto px-4 py-14 grid gap-14">
      {/* <div>Session: {JSON.stringify(session)}</div> */}
      <UserInfo />
      {session &&
        session?.user?.role === "ADMIN" &&
        users &&
        users?.length > 0 && (
          <div className="overflow-hidden bg-card text-card-foreground p-6 rounded-xl border shadow-lg">
            <Table>
              <TableCaption>A list of users.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap px-4">Name</TableHead>
                  <TableHead className="whitespace-nowrap px-4">
                    Email
                  </TableHead>
                  <TableHead className="whitespace-nowrap px-4">Role</TableHead>
                  <TableHead className="whitespace-nowrap px-4">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users?.map((user) => (
                  <TableRow key={user?.id}>
                    <TableCell className="whitespace-nowrap px-4">
                      {user?.name}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4">
                      {user?.email}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4">
                      {user?.role}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4">
                      <Button variant="destructive" size="sm">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
    </section>
  );
};

export default DashboardPage;
