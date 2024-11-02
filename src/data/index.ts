import User from "@/models/user";
import connectDb from "@/lib/db";

export async function getUserByEmail(email: string) {
  // connect db
  await connectDb();

  const user = await User?.findOne({ email });
  return user;
}
