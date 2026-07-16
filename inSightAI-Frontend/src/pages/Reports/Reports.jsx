import { useEffect, useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import ExportActions from "../../components/reports/ExportActions";
import ReportStats from "../../components/reports/ReportStats";
import RecentReports from "../../components/reports/RecentReports";
import PrimaryButton from "../../components/common/PrimaryButton";
import PageTransition from "../../components/common/PageTransition";

import reportService from "../../services/reportService";
import { showSuccess, showError } from "../../utils/toast";

// import EmptyState from "../../components/common/EmptyState";
// import { FileBarChart2 } from "lucide-react";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadReports = async () => {
    try {
      const response = await reportService.getReports();
      setReports(response.data);
    } catch (error) {
      showError("Failed to load reports.");
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  const handleGenerateReport = async () => {
    try {
      setLoading(true);

      const response = await reportService.createReport({
        reportName: `Business Report ${new Date().toLocaleString()}`,
        reportType: "pdf",
        description: "Generated from InsightAI",
      });

      showSuccess(response.message);

      await loadReports();
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      showError(error.response?.data?.message || "Failed to generate report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <PageHeader
        title="Reports"
        subtitle="Generate, export, and manage business reports."
        action={
          <PrimaryButton onClick={handleGenerateReport} disabled={loading}>
            {loading ? "Generating..." : "Generate Report"}
          </PrimaryButton>
        }
      />

      <ExportActions />

      <ReportStats refreshKey={refreshKey} />

      <RecentReports reports={reports} onDelete={loadReports} />
    </PageTransition>
  );
}
