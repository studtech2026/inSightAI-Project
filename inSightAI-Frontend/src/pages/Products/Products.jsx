import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";
import PrimaryButton from "../../components/common/PrimaryButton";

import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";

import ProductModal from "../../components/products/ProductModal";
import DeleteProductModal from "../../components/products/DeleteProductModal";
import ViewModal from "../../components/common/ViewModal";

import useProducts from "../../hooks/useProducts";

import { productColumns } from "../../data/productColumns";

import EmptyState from "../../components/common/EmptyState";
import { Package } from "lucide-react";

export default function Products() {
  const {
    products,

    modalOpen,
    setModalOpen,

    deleteOpen,
    setDeleteOpen,

    viewOpen,
    setViewOpen,

    selectedProduct,
    setSelectedProduct,

    createOrUpdate,
    deleteProduct,
  } = useProducts();

  const rows = products.map((item) => ({
    ...item,

    id: item._id,

    price: `₹${item.price}`,

    onView: () => {
      setSelectedProduct(item);
      setViewOpen(true);
    },

    onEdit: () => {
      setSelectedProduct(item);
      setModalOpen(true);
    },

    onDelete: () => {
      setSelectedProduct(item);
      setDeleteOpen(true);
    },
  }));

  return (
    <PageTransition>
      <PageHeader
        title="Products"
        subtitle="Manage your products, pricing, and stock availability."
        action={
          <PrimaryButton
            onClick={() => {
              setSelectedProduct(null);
              setModalOpen(true);
            }}
          >
            + Add Product
          </PrimaryButton>
        }
      />

      <TableToolbar
        searchPlaceholder="Search products..."
        addButtonText="Add Product"
        onSearch={(value) => console.log(value)}
        onAdd={() => {
          setSelectedProduct(null);
          setModalOpen(true);
        }}
        onExport={() => {}}
        onFilter={() => {}}
      />

      {rows.length === 0 ? (
        <EmptyState
          icon={Package}
          title="No Products Found"
          description="Start by adding your first product to manage your inventory."
          buttonText="Add Product"
          onClick={() => {
            setSelectedProduct(null);
            setModalOpen(true);
          }}
        />
      ) : (
        <Table columns={productColumns} data={rows} />
      )}

      <ProductModal
        open={modalOpen}
        product={selectedProduct}
        onClose={() => {
          setModalOpen(false);
          setSelectedProduct(null);
        }}
        onSubmit={createOrUpdate}
      />

      <DeleteProductModal
        open={deleteOpen}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedProduct(null);
        }}
        onDelete={deleteProduct}
      />

      <ViewModal
        open={viewOpen}
        title="Product Details"
        data={selectedProduct}
        onClose={() => {
          setViewOpen(false);
          setSelectedProduct(null);
        }}
      />
    </PageTransition>
  );
}
