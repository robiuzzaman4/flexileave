import User from "@/models/user";

export async function getUserByEmail(email: string) {
  const user = await User?.findOne({ email });
  return user;
}
