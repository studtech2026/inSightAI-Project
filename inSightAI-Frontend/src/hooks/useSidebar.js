import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export default function useSidebar() {
  return useContext(SidebarContext);
}