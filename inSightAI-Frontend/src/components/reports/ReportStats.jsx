import ReportGrid from "./ReportGrid";
import { reportStats } from "../../data/reportsData";

export default function ReportStats() {
  return (
    <ReportGrid stats={reportStats} />
  );
}