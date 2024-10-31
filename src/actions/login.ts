"use server";

type SignInPayload = {
  email: string;
  password: string;
};

export async function login(payload: SignInPayload) {
  console.log("payload", payload);
}
