import { useEffect, useState } from "react";

import customerService from "../services/customerService";
import {
  showSuccess,
  showError,
} from "../utils/toast";

export default function useCustomers() {
  const [customers, setCustomers] = useState([]);

  const [modalOpen, setModalOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [viewOpen, setViewOpen] =
    useState(false);

  const [selectedCustomer, setSelectedCustomer] =
    useState(null);

  const loadCustomers = async () => {
    try {
      const response =
        await customerService.getCustomers();

      setCustomers(response.data);
    } catch {
      showError("Failed to load customers.");
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const createOrUpdate = async (data) => {
    try {
      if (!data.name || !data.email) {
        return showError(
          "Name and Email are required."
        );
      }

      if (selectedCustomer) {
        await customerService.updateCustomer(
          selectedCustomer._id,
          data
        );

        showSuccess(
          "Customer updated successfully."
        );
      } else {
        await customerService.createCustomer(
          data
        );

        showSuccess(
          "Customer created successfully."
        );
      }

      setModalOpen(false);
      setSelectedCustomer(null);

      loadCustomers();
    } catch {
      showError("Operation failed.");
    }
  };

  const deleteCustomer = async () => {
    try {
      await customerService.deleteCustomer(
        selectedCustomer._id
      );

      showSuccess(
        "Customer deleted successfully."
      );

      setDeleteOpen(false);
      setSelectedCustomer(null);

      loadCustomers();
    } catch {
      showError("Delete failed.");
    }
  };

  return {
    customers,

    modalOpen,
    setModalOpen,

    deleteOpen,
    setDeleteOpen,

    viewOpen,
    setViewOpen,

    selectedCustomer,
    setSelectedCustomer,

    createOrUpdate,
    deleteCustomer,
  };
}