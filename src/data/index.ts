/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDb from "@/lib/db";
// import User from "@/models/user";

export async function getUserByEmail(email: string) {
  const { db } = await connectDb();
  const collection = db.collection("users");

  const user = await collection.findOne({ email });
  return user;

  // const user = await User.findOne({ email });
  // return user;
}

export async function getUserById(id: string) {
  const { db } = await connectDb();
  const collection = db.collection("users");

  const user = await collection.findOne({ _id: id });
  return user;

  // const user = await User.findOne({ _id: id });
  // return user;
}

export async function getAllUsers(userId: string) {
  try {
    const { db } = await connectDb();
    const collection = db.collection("users");

    const user = await getUserById(userId);
    if (!user) {
      return {
        success: false,
        message: "Forbidden access",
        data: null,
      };
    }

    if (user?.role !== "ADMIN") {
      return {
        success: false,
        message: "Forbidden access",
        data: null,
      };
    }

    const users = await collection.find({});
    return {
      success: true,
      message: "Get all users fetched successfully",
      data: users,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message ?? "Something went wrong",
    };
  }
}
