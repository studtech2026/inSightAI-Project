import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";
import PrimaryButton from "../../components/common/PrimaryButton";
import { inventory } from "../../data/inventoryData";
import { inventoryColumns } from "../../data/inventoryColumns";
import PageTransition from "../../components/common/PageTransition";

export default function Inventory() {
  return (
    <PageTransition>

       <PageHeader
        title="Inventory"
        subtitle="Track stock levels and monitor inventory health."
        action={
          <PrimaryButton>
            Restock
          </PrimaryButton>
        }
      />

      <TableToolbar
        searchPlaceholder="Search inventory..."
        addButtonText="Add Inventory"
        onSearch={(value) => console.log(value)}
        onAdd={() => console.log("Add Inventory")}
        onExport={() => console.log("Export")}
        onFilter={() => console.log("Filter")}
      />

      <Table
        columns={inventoryColumns}
        data={inventory}
      />

   </PageTransition>
  );
}