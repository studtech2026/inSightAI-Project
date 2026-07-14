import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/table/Table";
import TableToolbar from "../../components/table/TableToolbar";
import { products } from "../../data/productsData";
import { productColumns } from "../../data/productColumns";
import PrimaryButton from "../../components/common/PrimaryButton";
import PageTransition from "../../components/common/PageTransition";

export default function Products() {
  return (
    <PageTransition>
      <PageHeader
        title="Products"
        subtitle="Manage your products, pricing, and stock availability."
        action={<PrimaryButton>+ Add Product</PrimaryButton>}
      />

      <TableToolbar
        searchPlaceholder="Search products..."
        addButtonText="Add Product"
        onSearch={(value) => console.log("Search:", value)}
        onAdd={() => console.log("Add Product")}
        onExport={() => console.log("Export")}
        onFilter={() => console.log("Filter")}
      />

      <Table columns={productColumns} data={products} />
   </PageTransition>
  );
}
