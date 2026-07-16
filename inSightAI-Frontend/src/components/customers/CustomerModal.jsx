import { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

export default function CustomerModal({
  open,
  customer,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    totalOrders: 0,
    totalSpent: 0,
    status: "Active",
  });

  useEffect(() => {
    if (customer) {
      setForm({
        name: customer.name,
        email: customer.email,
        phone: customer.phone || "",
        city: customer.city || "",
        totalOrders: customer.totalOrders,
        totalSpent: customer.totalSpent,
        status: customer.status,
      });
    } else {
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        totalOrders: 0,
        totalSpent: 0,
        status: "Active",
      });
    }
  }, [customer]);

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
        customer
          ? "Edit Customer"
          : "Add Customer"
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