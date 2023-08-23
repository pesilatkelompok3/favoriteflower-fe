import ProductTable from "@/components/ProductTable";
import ButtonModal from "@/components/ButtonModal";

function Dashboard() {
  return (
    <>
      <div className="md:w-2/3 flex flex-col items-end md:mx-72 p-4">
        <ProductTable />
        <ButtonModal />
      </div>
    </>
  );
}

export default Dashboard;
