import { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

export default function InventoryModal({
  open,
  inventory,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState({
    productName: "",
    sku: "",
    quantity: "",
    location: "",
  });

  useEffect(() => {
    if (inventory) {
      setForm({
        productName: inventory.productName,
        sku: inventory.sku,
        quantity: inventory.quantity,
        location: inventory.location,
      });
    } else {
      setForm({
        productName: "",
        sku: "",
        quantity: "",
        location: "",
      });
    }
  }, [inventory]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      open={open}
      title={
        inventory
          ? "Edit Inventory"
          : "Add Inventory"
      }
      onClose={onClose}
      footer={
        <>
          <button
            onClick={onClose}
            className="rounded-xl border border-app px-4 py-2"
          >
            Cancel
          </button>

          <PrimaryButton
            onClick={() => onSubmit(form)}
          >
            Save
          </PrimaryButton>
        </>
      }
    >
      <div className="space-y-4">

        <Input
          label="Product Name"
          name="productName"
          value={form.productName}
          onChange={handleChange}
        />

        <Input
          label="SKU"
          name="sku"
          value={form.sku}
          onChange={handleChange}
        />

        <Input
          label="Quantity"
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <Input
          label="Warehouse"
          name="location"
          value={form.location}
          onChange={handleChange}
        />

      </div>
    </Modal>
  );
}