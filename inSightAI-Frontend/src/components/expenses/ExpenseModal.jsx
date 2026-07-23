import { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

const initialForm = {
  title: "",
  category: "",
  amount: "",
  paymentMethod: "Cash",
  expenseDate: "",
  notes: "",
};

export default function ExpenseModal({
  open,
  expense,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!open) return;

    if (expense) {
      setForm({
        title: expense.title || "",
        category: expense.category || "",
        amount: expense.amount || "",
        paymentMethod: expense.paymentMethod || "Cash",
        expenseDate: expense.expenseDate
          ? expense.expenseDate.slice(0, 10)
          : "",
        notes: expense.notes || "",
      });
    } else {
      setForm(initialForm);
    }
  }, [expense, open]);

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
      title={expense ? "Edit Expense" : "Add Expense"}
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
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <Input
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
        />

        <Input
          label="Amount"
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            Payment Method
          </label>

          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full rounded-xl border border-app bg-surface px-4 py-3"
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Card</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        <Input
          label="Expense Date"
          type="date"
          name="expenseDate"
          value={form.expenseDate}
          onChange={handleChange}
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            Notes
          </label>

          <textarea
            rows={4}
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full rounded-xl border border-app bg-surface p-3"
          />
        </div>
      </div>
    </Modal>
  );
}