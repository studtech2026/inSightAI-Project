import { useNavigate } from "react-router-dom";

export default function SearchResultItem({ item, onClose }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.path);
    onClose();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left px-4 py-3 hover:bg-slate-800 transition"
    >
      <p className="text-white font-medium">
        {item.title}
      </p>

      <p className="text-sm text-slate-400">
        {item.subtitle}
      </p>
    </button>
  );
}