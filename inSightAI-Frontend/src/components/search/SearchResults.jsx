import { searchData } from "../../data/searchData";
import useGlobalSearch from "../../hooks/useGlobalSearch";
import SearchResultItem from "./SearchResultItem";
import { motion } from "framer-motion";

export default function SearchResults() {
  const { query, setQuery } = useGlobalSearch();

  if (!query.trim()) return null;

  const filtered = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
  initial={{
    opacity: 0,
    y: -10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.2,
  }} className="absolute top-16 left-0 w-full bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden z-50">

      {filtered.length === 0 ? (
        <p className="text-slate-400 p-4">
          No results found.
        </p>
      ) : (
        filtered.map((item) => (
          <SearchResultItem
            key={item.id}
            item={item}
            onClose={() => setQuery("")}
          />
        ))
      )}
    </motion.div>
  );
}