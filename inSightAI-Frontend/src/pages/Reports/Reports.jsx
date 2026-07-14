import PageHeader from "../../components/common/PageHeader";
import ExportActions from "../../components/reports/ExportActions";
import ReportStats from "../../components/reports/ReportStats";
import RecentReports from "../../components/reports/RecentReports";
import PrimaryButton from "../../components/common/PrimaryButton";
import { recentReports } from "../../data/reportsData";
import PageTransition from "../../components/common/PageTransition";

export default function Reports() {
  return (
    <PageTransition>
      <PageHeader
        title="Reports"
        subtitle="Generate, export, and manage business reports."
        action={<PrimaryButton>Generate Report</PrimaryButton>}
      />

      <ExportActions />

      <ReportStats />

      <RecentReports reports={recentReports} />
  </PageTransition>
  );
}
