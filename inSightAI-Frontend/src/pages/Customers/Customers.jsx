import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";
import { customers } from "../../data/customersData";
import { customerColumns } from "../../data/customerColumns";
import PrimaryButton from "../../components/common/PrimaryButton";
import PageTransition from "../../components/common/PageTransition";

export default function Customers() {
  return (
    <PageTransition>

      <PageHeader
        title="Customers"
        subtitle="Manage customer information and monitor customer growth."
        action={
          <PrimaryButton>
            + Add Customer
          </PrimaryButton>
        }
      />

      <TableToolbar
        searchPlaceholder="Search customers..."
        addButtonText="Add Customer"
        onSearch={(value) => console.log(value)}
        onAdd={() => console.log("Add Customer")}
        onExport={() => console.log("Export")}
        onFilter={() => console.log("Filter")}
      />

      <Table
        columns={customerColumns}
        data={customers}
      />

    </PageTransition>
  );
}