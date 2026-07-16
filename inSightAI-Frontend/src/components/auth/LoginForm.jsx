import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

import authService from "../../services/authService";
import { login } from "../../utils/auth";

import {
  showSuccess,
  showError,
} from "../../utils/toast";

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim()) {
      showError("Email is required.");
      return;
    }

    if (!form.password.trim()) {
      showError("Password is required.");
      return;
    }

    try {
      setLoading(true);

      const result =
        await authService.login(form);

      login(
        result.data.user,
        result.data.token
      );

      showSuccess(
        result.message ||
          "Login successful."
      );

      navigate("/dashboard");
    } catch (error) {
      showError(
        error.response?.data?.message ||
          "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

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
          Welcome Back
        </h1>

        <p className="mt-2 text-secondary">
          Login to continue using
          InsightAI
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <AuthInput
          label="Email"
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        <PasswordInput
          label="Password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-secondary">
            <input
              type="checkbox"
              className="accent-violet-600"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm text-violet-500 hover:text-violet-400"
          >
            Forgot Password?
          </Link>
        </div>

        <AuthButton
          type="submit"
          loading={loading}
        >
          Login
        </AuthButton>
      </form>

      <p className="mt-8 text-center text-sm text-secondary">
        Don't have an account?

        <Link
          to="/register"
          className="ml-2 text-violet-500 hover:text-violet-400"
        >
          Register
        </Link>
      </p>
    </AuthCard>
  );
}