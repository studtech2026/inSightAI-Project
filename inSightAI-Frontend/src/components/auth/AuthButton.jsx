import clsx from "clsx";

export default function AuthButton({
  children,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
  fullWidth = true,
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white",

    secondary:
      "bg-surface border border-app text-main hover:bg-card-hover",

    outline:
      "border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "rounded-xl px-5 py-3 font-semibold transition-all duration-300",
        "disabled:cursor-not-allowed disabled:opacity-50",
        fullWidth && "w-full",
        variants[variant]
      )}
    >
      {loading
        ? "Please wait..."
        : children}
    </button>
  );
}