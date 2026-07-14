import {
  Bot,
  Sparkles,
  Trash2,
  Download,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ChatHeader({
  clearChat,
  exportChat,
}) {
  const handleExport = () => {
    exportChat();
    toast.success("Conversation downloaded");
  };

  const handleClear = () => {
    clearChat();
  };

  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-app
        bg-card
        px-6
        py-5
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-violet-600
            to-blue-600
            shadow-lg
          "
        >
          <Bot
            size={24}
            className="text-white"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-main">
              InsightAI Assistant
            </h2>

            <Sparkles
              size={18}
              className="text-violet-500"
            />
          </div>

          <p className="text-sm text-secondary">
            AI Business Intelligence Assistant
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleExport}
          title="Download Conversation"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-app
            bg-surface
            transition
            hover:bg-card-hover
          "
        >
          <Download
            size={18}
            className="text-main"
          />
        </button>

        <button
          onClick={handleClear}
          title="Clear Conversation"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-app
            bg-surface
            transition
            hover:bg-red-500/10
          "
        >
          <Trash2
            size={18}
            className="text-red-500"
          />
        </button>
      </div>
    </div>
  );
}