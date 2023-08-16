import ProductTable from "@/components/ProductTable";
import ButtonModal from "@/components/ButtonModal";
// import middleware from "@/middleware";

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
// export default middleware(Dashboard);
