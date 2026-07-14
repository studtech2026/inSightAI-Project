import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import SearchProvider from "./context/SearchContext";
import SidebarProvider from "./context/SidebarContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SearchProvider>
           <SidebarProvider>
<App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,

            style: {
              background: "#0f172a",
              color: "#fff",
              border: "1px solid #334155",
              borderRadius: "12px",
            },
          }}
        />
        </SidebarProvider>
      </SearchProvider>
    </ThemeProvider>
  </StrictMode>,
);
