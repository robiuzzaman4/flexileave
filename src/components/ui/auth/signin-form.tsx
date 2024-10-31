import React from "react";
import { Button } from "../button";
import { signInWithGithub } from "@/actions/signInWithGithub";

const SigninForm = () => {
  return (
    <div>
      <form
        action={signInWithGithub}
      >
        <Button type="submit">Signin with GitHub</Button>
      </form>
    </div>
  );
};

export default SigninForm;
