import ProductTable from "@/components/ProductTable";
import ButtonModal from "@/components/ButtonModal";
function Dashboard() {
  return (
    <>
      <div className="flex flex-col md:mt-2 gap-2">
        <ProductTable />
        <ButtonModal />
      </div>
    </>
  );
}

export default Dashboard;
