"use server";

type SignInPayload = {
  email: string;
  password: string;
};

export async function userSignIn(payload: SignInPayload) {
  console.log("payload", payload);
}
