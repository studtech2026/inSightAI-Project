import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

export default function RegisterForm() {
  return (
    <AuthCard>
      <div className="mb-6 flex justify-center">
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-violet-500
            to-blue-500
          "
        >
          <Sparkles
            size={30}
            className="text-white"
          />
        </div>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-main">
          Create Account
        </h1>

        <p className="mt-2 text-secondary">
          Join InsightAI and start
          analyzing your business.
        </p>
      </div>

      <form className="space-y-5">
        <AuthInput
          label="Full Name"
          id="name"
          name="name"
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />

        <AuthInput
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        <PasswordInput
          label="Password"
          id="password"
          name="password"
          placeholder="Create a password"
          autoComplete="new-password"
          required
        />

        <PasswordInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          autoComplete="new-password"
          required
        />

        <AuthButton type="submit">
          Create Account
        </AuthButton>
      </form>

      <p className="mt-8 text-center text-sm text-secondary">
        Already have an account?

        <Link
          to="/login"
          className="ml-2 text-violet-500 hover:text-violet-400"
        >
          Login
        </Link>
      </p>
    </AuthCard>
  );
}