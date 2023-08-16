import ProductTable from "@/components/ProductTable";
import ButtonModal from "@/components/ButtonModal";
<<<<<<< HEAD
import isAuthenticated from "@/middleware/auth";
=======
// import middleware from "@/middleware";
>>>>>>> 889f68506b13156728f53d736c9fa224ce35bb10

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
<<<<<<< HEAD
export default isAuthenticated(Dashboard);
=======

export default Dashboard;
// export default middleware(Dashboard);
>>>>>>> 889f68506b13156728f53d736c9fa224ce35bb10
