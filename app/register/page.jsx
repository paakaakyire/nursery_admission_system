"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Password must be at least 8 characters.",
  }),
});

const Register = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="flex justify-center items-center w-full h-full my-6 px-4">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white px-8 py-8 rounded-md w-[40rem]"
      >
        <h1 className="text-xl text-[#222] mb-8">
          Register to continue to delany academy
        </h1>
        <div className="flex flex-col gap-1 mb-[0.6rem]">
          <label>Username</label>
          <input
            type="text"
            {...form.register("username")}
            placeholder="username"
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded"
          />
        </div>
        <div className="flex flex-col gap-1  mb-[0.6rem]">
          <label>Password</label>
          <input
            type="password"
            {...form.register("password")}
            placeholder="password"
            className="ring-[2px] ring-gray-200 px-0.5 py-[0.6rem] rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm cursor-pointer px-4 py-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Register;
