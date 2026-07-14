import {
  Upload,
  FileText,
  BrainCircuit,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Card from "../common/Card";

const actions = [
  {
    title: "Upload Data",
    icon: Upload,
    path: "/upload",
  },
  {
    title: "Generate Report",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "AI Assistant",
    icon: BrainCircuit,
    path: "/assistant",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card hover={false}>
      <h2 className="text-xl font-semibold text-main">
        Quick Actions
      </h2>

      <p className="mt-1 text-sm text-secondary">
        Jump to frequently used features.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-app
                bg-surface
                p-6
                transition
                hover:bg-card-hover
                hover:-translate-y-1
              "
            >
              <div className="rounded-2xl bg-violet-500/10 p-4">
                <Icon
                  size={28}
                  className="text-violet-500"
                />
              </div>

              <span className="font-medium text-main">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}