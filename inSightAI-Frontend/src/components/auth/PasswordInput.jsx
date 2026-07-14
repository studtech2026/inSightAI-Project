import { useState } from "react";
import {
  Eye,
  EyeOff,
} from "lucide-react";

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  name,
  id,
  autoComplete = "current-password",
  required = false,
}) {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm text-main"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={
            showPassword
              ? "text"
              : "password"
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className="
            w-full
            rounded-xl
            border
            border-app
            bg-surface
            px-4
            py-3
            pr-12
            text-main
            placeholder:text-secondary
            outline-none
            transition
            focus:border-violet-500
          "
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword((p) => !p)
          }
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-secondary
            transition
            hover:text-main
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
    </div>
  );
}