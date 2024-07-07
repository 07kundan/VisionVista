import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, CustomButton_1 } from "../index";
// import { useLogin } from "../hooks/auth.hook";

function LoginForm({ onLogin }) {
  const schema = z.object({
    usernameOrEmail: z
      .string()
      .min(3, "Username or email must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // destructuring return value from uselogin hook
  //   const { mutateAsync: login, isPending, isError, error } = useLogin();
  const isError = false;
  const isPending = false;

  // method for login user
  const loginUser = async (formdata) => {
    try {
      //   console.log(formdata);
      const session = await login(formdata);
      console.log("session", session);
      if (session) {
        onLogin(session);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      // onSubmit={handleSubmit(loginUser)}
      className="flex flex-col gap-2"
    >
      <Input
        label={"Username/Email*"}
        type="text"
        placeholder="johnwick7"
        id={"username"}
        {...register("usernameOrEmail", {
          required: true,
        })}
      />
      {errors.usernameOrEmail && (
        <span className="text-red-500 text-sm">
          {errors.usernameOrEmail.message}
        </span>
      )}
      <Input
        label={"Password*"}
        type="password"
        placeholder="*******"
        id={"password"}
        {...register("password", {
          required: true,
        })}
        className="mb-4"
      />
      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}

      {isError && <span className="text-red-500 text-sm">{error.message}</span>}
      {/* login button */}
      <CustomButton_1 type="submit">
        {isPending ? "Logging In" : "Login"}
      </CustomButton_1>
    </form>
  );
}

export default LoginForm;
