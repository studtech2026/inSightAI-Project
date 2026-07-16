import { useEffect, useState } from "react";

import ReportGrid from "./ReportGrid";
import reportService from "../../services/reportService";

export default function ReportStats({ refreshKey }) {
  const [stats, setStats] = useState([
    {
      id: 1,
      title: "Reports Generated",
      value: "0",
      color: "text-violet-400",
    },
    {
      id: 2,
      title: "PDF Reports",
      value: "0",
      color: "text-red-400",
    },
    {
      id: 3,
      title: "Excel Reports",
      value: "0",
      color: "text-green-400",
    },
    {
      id: 4,
      title: "CSV Reports",
      value: "0",
      color: "text-blue-400",
    },
  ]);

  useEffect(() => {
    loadStats();
  }, [refreshKey]);

  const loadStats = async () => {
    try {
      const response = await reportService.getReports();

      const reports = response.data;

      setStats([
        {
          id: 1,
          title: "Reports Generated",
          value: reports.length,
          color: "text-violet-400",
        },
        {
          id: 2,
          title: "PDF Reports",
          value: reports.filter((r) => r.reportType === "pdf").length,
          color: "text-red-400",
        },
        {
          id: 3,
          title: "Excel Reports",
          value: reports.filter((r) => r.reportType === "xlsx").length,
          color: "text-green-400",
        },
        {
          id: 4,
          title: "CSV Reports",
          value: reports.filter((r) => r.reportType === "csv").length,
          color: "text-blue-400",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return <ReportGrid stats={stats} />;
}
