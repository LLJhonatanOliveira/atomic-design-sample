import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "../components/atoms/TextInput";
import { Button } from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";


const signupSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Must be a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be less than 20 characters"),
});

type SignupSchemaType = z.infer<typeof signupSchema>;

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  });


  const handleSignup: SubmitHandler<SignupSchemaType> = (data) => {
    console.log("User registered:", data);
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit(handleSignup)} className="w-full max-w-sm">
        <TextInput
          label="Email"
          variant="outlined"
          size="medium"
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message} 
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <TextInput
          label="Password"
          variant="outlined"
          size="medium"
          placeholder="Enter your password"
          type="password"
          {...register("password")} 
          error={errors.password?.message}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Button variant="primary" size="medium" type="submit">
          Sign Up
        </Button>

        <p className="mt-4">
          Already have an account?{" "}
          <button onClick={goToLogin} className="text-blue-600 hover:underline">
            Sign in here
          </button>
        </p>
      </form>
    </div>
  );
};
