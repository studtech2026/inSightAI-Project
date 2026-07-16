import { useEffect, useState } from "react";

import expenseService from "../services/expenseService";
import {
  showSuccess,
  showError,
} from "../utils/toast";

export default function useExpenses() {
  const [expenses, setExpenses] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const [selectedExpense, setSelectedExpense] =
    useState(null);

  const loadExpenses = async () => {
    try {
      const response =
        await expenseService.getExpenses();

      setExpenses(response.data);
    } catch {
      showError("Failed to load expenses.");
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const createOrUpdate = async (data) => {
    try {
      if (
        !data.title ||
        !data.category ||
        !data.amount
      ) {
        return showError(
          "Please fill all required fields."
        );
      }

      if (selectedExpense) {
        await expenseService.updateExpense(
          selectedExpense._id,
          data
        );

        showSuccess(
          "Expense updated successfully."
        );
      } else {
        await expenseService.createExpense(
          data
        );

        showSuccess(
          "Expense created successfully."
        );
      }

      setModalOpen(false);
      setSelectedExpense(null);

      loadExpenses();
    } catch {
      showError("Operation failed.");
    }
  };

  const deleteExpense = async () => {
    try {
      await expenseService.deleteExpense(
        selectedExpense._id
      );

      showSuccess(
        "Expense deleted successfully."
      );

      setDeleteOpen(false);
      setSelectedExpense(null);

      loadExpenses();
    } catch {
      showError("Delete failed.");
    }
  };

  return {
    expenses,

    modalOpen,
    setModalOpen,

    deleteOpen,
    setDeleteOpen,

    viewOpen,
    setViewOpen,

    selectedExpense,
    setSelectedExpense,

    createOrUpdate,
    deleteExpense,
  };
}