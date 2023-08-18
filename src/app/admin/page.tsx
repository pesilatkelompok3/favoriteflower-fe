import ProductTable from "@/components/ProductTable";
import ButtonModal from "@/components/ButtonModal";
import isAuthenticated from "@/middleware/auth";

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
// export default isAuthenticated(Dashboard());

export default Dashboard;
