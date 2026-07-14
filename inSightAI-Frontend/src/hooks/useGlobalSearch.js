import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function useGlobalSearch() {
  return useContext(SearchContext);
}