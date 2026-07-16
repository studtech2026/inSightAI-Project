import { useEffect, useState } from "react";

import inventoryService from "../services/inventoryService";
import { showError, showSuccess } from "../utils/toast";

export default function useInventory() {
  const [inventory, setInventory] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const [selectedInventory, setSelectedInventory] =
    useState(null);

  const loadInventory = async () => {
    try {
      const response =
        await inventoryService.getInventory();

      setInventory(response.data);
    } catch {
      showError("Failed to load inventory.");
    }
  };

  useEffect(() => {
    loadInventory();
  }, []);

  const createOrUpdate = async (data) => {
    try {
      if (
        !data.productName ||
        !data.sku ||
        !data.location
      ) {
        return showError("Please fill all fields.");
      }

      if (selectedInventory) {
        await inventoryService.updateInventory(
          selectedInventory._id,
          data
        );

        showSuccess(
          "Inventory updated successfully."
        );
      } else {
        await inventoryService.createInventory(
          data
        );

        showSuccess(
          "Inventory created successfully."
        );
      }

      setModalOpen(false);
      setSelectedInventory(null);

      loadInventory();
    } catch {
      showError("Operation failed.");
    }
  };

  const deleteInventory = async () => {
    try {
      await inventoryService.deleteInventory(
        selectedInventory._id
      );

      showSuccess(
        "Inventory deleted successfully."
      );

      setDeleteOpen(false);
      setSelectedInventory(null);

      loadInventory();
    } catch {
      showError("Delete failed.");
    }
  };

  return {
    inventory,

    modalOpen,
    setModalOpen,

    deleteOpen,
    setDeleteOpen,

    viewOpen,
    setViewOpen,

    selectedInventory,
    setSelectedInventory,

    createOrUpdate,
    deleteInventory,
  };
}