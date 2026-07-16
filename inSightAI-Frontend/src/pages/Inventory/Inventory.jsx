import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";
import PrimaryButton from "../../components/common/PrimaryButton";

import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";

import InventoryModal from "../../components/inventory/InventoryModal";
import DeleteInventoryModal from "../../components/inventory/DeleteInventoryModal";
import ViewModal from "../../components/common/ViewModal";

import useInventory from "../../hooks/useInventory";

import { inventoryColumns } from "../../data/inventoryColumns";

import EmptyState from "../../components/common/EmptyState";
import { Boxes } from "lucide-react";

export default function Inventory() {
  const {
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
  } = useInventory();

  const rows = inventory.map((item) => ({
    ...item,

    id: item._id,

    product: item.productName,
    warehouse: item.location,
    stock: item.quantity,
    reorder: 10,

    onView: () => {
      setSelectedInventory(item);
      setViewOpen(true);
    },

    onEdit: () => {
      setSelectedInventory(item);
      setModalOpen(true);
    },

    onDelete: () => {
      setSelectedInventory(item);
      setDeleteOpen(true);
    },
  }));

  return (
    <PageTransition>
      <PageHeader
        title="Inventory"
        subtitle="Track stock levels and monitor inventory health."
        action={
          <PrimaryButton
            onClick={() => {
              setSelectedInventory(null);
              setModalOpen(true);
            }}
          >
            + Add Inventory
          </PrimaryButton>
        }
      />

      <TableToolbar
        searchPlaceholder="Search inventory..."
        addButtonText="Add Inventory"
        onSearch={() => {}}
        onAdd={() => {
          setSelectedInventory(null);
          setModalOpen(true);
        }}
        onExport={() => {}}
        onFilter={() => {}}
      />

      {inventory.length === 0 ? (
        <EmptyState
          icon={Boxes}
          title="Inventory Empty"
          description="No inventory items available. Add inventory to begin tracking stock."
          buttonText="Add Inventory"
          onClick={() => console.log("Open Inventory Modal")}
        />
      ) : (
        <Table columns={inventoryColumns} data={rows} />
      )}

      <InventoryModal
        open={modalOpen}
        inventory={selectedInventory}
        onClose={() => {
          setModalOpen(false);
          setSelectedInventory(null);
        }}
        onSubmit={createOrUpdate}
      />

      <DeleteInventoryModal
        open={deleteOpen}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedInventory(null);
        }}
        onDelete={deleteInventory}
      />

      <ViewModal
        open={viewOpen}
        title="Inventory Details"
        data={selectedInventory}
        onClose={() => {
          setViewOpen(false);
          setSelectedInventory(null);
        }}
      />
    </PageTransition>
  );
}
