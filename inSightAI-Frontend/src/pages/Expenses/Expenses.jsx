import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";
import PrimaryButton from "../../components/common/PrimaryButton";
import { expenses } from "../../data/expensesData";
import { expenseColumns } from "../../data/expenseColumns";
import PageTransition from "../../components/common/PageTransition";

export default function Expenses() {
  return (
    <PageTransition>

      <PageHeader
        title="Expenses"
        subtitle="Track business expenses and spending patterns."
        action={
          <PrimaryButton>
            + Add Expense
          </PrimaryButton>
        }
      />

      <TableToolbar
        searchPlaceholder="Search expenses..."
        addButtonText="Add Expense"
        onSearch={(value) => console.log(value)}
        onAdd={() => console.log("Add Expense")}
        onExport={() => console.log("Export")}
        onFilter={() => console.log("Filter")}
      />

      <Table
        columns={expenseColumns}
        data={expenses}
      />

  </PageTransition>
  );
}