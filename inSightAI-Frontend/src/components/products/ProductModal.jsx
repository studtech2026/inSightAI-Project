import { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

export default function ProductModal({ open, onClose, onSubmit, product }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
        status: product.status,
      });
    } else {
      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
        status: "In Stock",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Modal
      open={open}
      title={product ? "Edit Product" : "Add Product"}
      onClose={onClose}
      footer={
        <>
          <button
            onClick={onClose}
            className="rounded-xl border border-app px-4 py-2"
          >
            Cancel
          </button>

          <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
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
          <label className="mb-2 block text-sm font-medium">Status</label>

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
