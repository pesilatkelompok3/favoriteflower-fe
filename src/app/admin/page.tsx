import ProductTable from "@/components/ProductTable";
import ButtonModal from "@/components/ButtonModal";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col md:mt-4 w-2/3 gap-2">
        <ProductTable />
        <ButtonModal />
      </div>
    </>
  );
}
