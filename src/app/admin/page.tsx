import ProductTable from "@/components/ProductTable";
import ButtonModal from "@/components/ButtonModal";
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 md:mt-4">
        <ProductTable />
        <ButtonModal />
      </div>
    </>
  );
}
