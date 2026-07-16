export default function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-main">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-app
          bg-surface
          px-4
          py-3
          text-main
          outline-none
          transition
          focus:border-violet-500
        "
      />
    </div>
  );
}