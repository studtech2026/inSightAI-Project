import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

import authService from "../../services/authService";
import { login } from "../../utils/auth";

import { showSuccess, showError } from "../../utils/toast";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      return showError("Name is required.");
    }

    if (!form.email.trim()) {
      return showError("Email is required.");
    }

    if (!form.password.trim()) {
      return showError("Password is required.");
    }

    if (form.password.length < 6) {
      return showError("Password must be at least 6 characters.");
    }

    if (form.password !== form.confirmPassword) {
      return showError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const result = await authService.register({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      login(result.data.user, result.data.token);

      showSuccess(result.message || "Registration successful.");

      navigate("/dashboard");
    } catch (error) {
      console.error("Register Error:", error);

      showError(
        error.response?.data?.message ||
          error.message ||
          "Registration failed.",
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
          <Sparkles size={30} className="text-white" />
        </div>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-main">Create Account</h1>

        <p className="mt-2 text-secondary">
          Join InsightAI and start analyzing your business.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label="Full Name"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />

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
          placeholder="Create a password"
          autoComplete="new-password"
          required
        />

        <PasswordInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          autoComplete="new-password"
          required
        />

        <AuthButton type="submit" loading={loading}>
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
