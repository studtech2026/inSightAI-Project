import { User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { logout } from "../../utils/auth";

export default function ProfileMenu({ closeMenu }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        y: -10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        absolute
        right-0
        top-14
        z-50
        w-64
        overflow-hidden
        rounded-2xl
        border
        border-app
        bg-card
        shadow-app
      "
    >
      {/* Settings */}
      <button
        onClick={()=>{closeMenu(); navigate("settings")}}
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          text-left
          text-main
          transition
          hover:bg-card-hover
        "
      >
        <Settings
          size={18}
          className="text-blue-500"
        />

        <span>Settings</span>
      </button>

      {/* Divider */}
      <div className="border-t border-app" />

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          text-left
          text-red-500
          transition
          hover:bg-red-500/10
        "
      >
        <LogOut size={18} />

        <span>Logout</span>
      </button>
    </motion.div>
  );
}