export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  autoComplete,
  required = false,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm text-main"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
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
          text-main
          placeholder:text-secondary
          outline-none
          transition
          focus:border-violet-500
        "
      />
    </div>
  );
}