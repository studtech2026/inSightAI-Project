import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";
import PrimaryButton from "../../components/common/PrimaryButton";

import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";

import ExpenseModal from "../../components/expenses/ExpenseModal";
import DeleteExpenseModal from "../../components/expenses/DeleteExpenseModal";
import ViewModal from "../../components/common/ViewModal";

import { expenseColumns } from "../../data/expenseColumns";

import useExpenses from "../../hooks/useExpenses";

import EmptyState from "../../components/common/EmptyState";
import { ReceiptIndianRupee } from "lucide-react";

export default function Expenses() {
  const {
    expenses,

    modalOpen,
    setModalOpen,

    deleteOpen,
    setDeleteOpen,

    viewOpen,
    setViewOpen,

    selectedExpense,
    setSelectedExpense,

    createOrUpdate,
    deleteExpense,
  } = useExpenses();

  const rows = expenses.map((item) => ({
    ...item,

    id: item._id,

    category: item.category,
    amount: `₹${item.amount}`,
    date: new Date(item.expenseDate).toLocaleDateString(),

    payment: item.paymentMethod || "Cash",

    onView: () => {
      setSelectedExpense(item);
      setViewOpen(true);
    },

    onEdit: () => {
      setSelectedExpense(item);
      setModalOpen(true);
    },

    onDelete: () => {
      setSelectedExpense(item);
      setDeleteOpen(true);
    },
  }));

  return (
    <PageTransition>
      <PageHeader
        title="Expenses"
        subtitle="Track business expenses and spending patterns."
        action={
          <PrimaryButton
            onClick={() => {
              setSelectedExpense(null);
              setModalOpen(true);
            }}
          >
            + Add Expense
          </PrimaryButton>
        }
      />

      <TableToolbar
        searchPlaceholder="Search expenses..."
        addButtonText="Add Expense"
        onSearch={() => {}}
        onAdd={() => {
          setSelectedExpense(null);
          setModalOpen(true);
        }}
        onExport={() => {}}
        onFilter={() => {}}
      />

      {expenses.length === 0 ? (
        <EmptyState
          icon={ReceiptIndianRupee}
          title="No Expenses Found"
          description="Track your business spending by adding your first expense."
          buttonText="Add Expense"
          onClick={() => console.log("Open Expense Modal")}
        />
      ) : (
        <Table columns={expenseColumns} data={rows} />
      )}

      <ExpenseModal
        open={modalOpen}
        expense={selectedExpense}
        onClose={() => {
          setModalOpen(false);
          setSelectedExpense(null);
        }}
        onSubmit={createOrUpdate}
      />

      <DeleteExpenseModal
        open={deleteOpen}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedExpense(null);
        }}
        onDelete={deleteExpense}
      />

      <ViewModal
        open={viewOpen}
        title="Expense Details"
        data={selectedExpense}
        onClose={() => {
          setViewOpen(false);
          setSelectedExpense(null);
        }}
      />
    </PageTransition>
  );
}
