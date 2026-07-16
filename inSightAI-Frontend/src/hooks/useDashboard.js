import { useState, useEffect } from "react";
import dashboardService from "../services/dashboardService";

export default function useDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response =
        await dashboardService.getDashboard();

      setDashboard(response.data);

      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return {
    dashboard,
    loading,
    error,
    refreshDashboard: fetchDashboard,
  };
}