import React, { useState } from "react";
import { TextInput } from "../components/atoms/TextInput";
import { Button } from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("User logged in:", { email, password });
    navigate("/catalog");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="w-full max-w-sm">
        <TextInput
          name="email"
          label="Email"
          variant="outlined"
          size="medium"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          name="password"
          label="Password"
          variant="outlined"
          size="medium"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" size="medium" onClick={handleLogin}>
          Login
        </Button>
        <p className="mt-4">
          Don't have an account?{" "}
          <button
            onClick={goToSignup}
            className="text-blue-600 hover:underline"
          >
            Sign up here
          </button>
        </p>
      </form>
    </div>
  );
};
