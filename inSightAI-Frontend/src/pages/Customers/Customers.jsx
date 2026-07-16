import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";
import PrimaryButton from "../../components/common/PrimaryButton";

import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";

import CustomerModal from "../../components/customers/CustomerModal";
import DeleteCustomerModal from "../../components/customers/DeleteCustomerModal";
import ViewModal from "../../components/common/ViewModal";

import { customerColumns } from "../../data/customerColumns";

import useCustomers from "../../hooks/useCustomers";

import EmptyState from "../../components/common/EmptyState";
import { Users } from "lucide-react";

export default function Customers() {
  const {
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
  } = useCustomers();

  const rows = customers.map((item) => ({
    ...item,

    id: item._id,

    orders: item.totalOrders,

    spent: `₹${item.totalSpent}`,

    onView: () => {
      setSelectedCustomer(item);
      setViewOpen(true);
    },

    onEdit: () => {
      setSelectedCustomer(item);
      setModalOpen(true);
    },

    onDelete: () => {
      setSelectedCustomer(item);
      setDeleteOpen(true);
    },
  }));

  return (
    <PageTransition>
      <PageHeader
        title="Customers"
        subtitle="Manage customer information and monitor customer growth."
        action={
          <PrimaryButton
            onClick={() => {
              setSelectedCustomer(null);
              setModalOpen(true);
            }}
          >
            + Add Customer
          </PrimaryButton>
        }
      />

      <TableToolbar
        searchPlaceholder="Search customers..."
        addButtonText="Add Customer"
        onSearch={() => {}}
        onAdd={() => {
          setSelectedCustomer(null);
          setModalOpen(true);
        }}
        onExport={() => {}}
        onFilter={() => {}}
      />

      {customers.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No Customers Found"
          description="Add your first customer to start managing customer relationships."
          buttonText="Add Customer"
          onClick={() => {
            setSelectedCustomer(null);
            setModalOpen(true);
          }}
        />
      ) : (
        <Table columns={customerColumns} data={rows} />
      )}

      <CustomerModal
        open={modalOpen}
        customer={selectedCustomer}
        onClose={() => {
          setModalOpen(false);
          setSelectedCustomer(null);
        }}
        onSubmit={createOrUpdate}
      />

      <DeleteCustomerModal
        open={deleteOpen}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedCustomer(null);
        }}
        onDelete={deleteCustomer}
      />

      <ViewModal
        open={viewOpen}
        title="Customer Details"
        data={selectedCustomer}
        onClose={() => {
          setViewOpen(false);
          setSelectedCustomer(null);
        }}
      />
    </PageTransition>
  );
}
