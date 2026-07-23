import { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  totalOrders: 0,
  totalSpent: 0,
  status: "Active",
};

export default function CustomerModal({
  open,
  customer,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!open) return;

    if (customer) {
      setForm({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        city: customer.city || "",
        totalOrders: customer.totalOrders || 0,
        totalSpent: customer.totalSpent || 0,
        status: customer.status || "Active",
      });
    } else {
      setForm(initialForm);
    }
  }, [customer, open]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    await onSubmit(form);
    setForm(initialForm);
  };

  return (
    <Modal
      open={open}
      title={customer ? "Edit Customer" : "Add Customer"}
      onClose={() => {
        setForm(initialForm);
        onClose();
      }}
      footer={
        <>
          <button
            onClick={() => {
              setForm(initialForm);
              onClose();
            }}
            className="rounded-xl border border-app px-4 py-2"
          >
            Cancel
          </button>

          <PrimaryButton onClick={handleSubmit}>
            Save
          </PrimaryButton>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label="Customer Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <Input
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <Input
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
        />

        <Input
          label="Total Orders"
          type="number"
          name="totalOrders"
          value={form.totalOrders}
          onChange={handleChange}
        />

        <Input
          label="Total Spent"
          type="number"
          name="totalSpent"
          value={form.totalSpent}
          onChange={handleChange}
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-app bg-surface px-4 py-3"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}