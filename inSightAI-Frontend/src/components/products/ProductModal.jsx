import { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

const initialForm = {
  name: "",
  category: "",
  price: "",
  stock: "",
  status: "In Stock",
};

export default function ProductModal({
  open,
  onClose,
  onSubmit,
  product,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!open) return;

    if (product) {
      setForm({
        name: product.name || "",
        category: product.category || "",
        price: product.price || "",
        stock: product.stock || "",
        status: product.status || "In Stock",
      });
    } else {
      setForm(initialForm);
    }
  }, [product, open]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit(form);

    // Reset form after successful save
    setForm(initialForm);
  };

  return (
    <Modal
      open={open}
      title={product ? "Edit Product" : "Add Product"}
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
          label="Product Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
        />

        <Input
          label="Price"
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />

        <Input
          label="Stock"
          type="number"
          name="stock"
          value={form.stock}
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
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}