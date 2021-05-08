import BarChat from "componnets/BarChart";
import DataTable from "componnets/DataTable";
import DonutChart from "componnets/DonutChat";
import Footer from "componnets/Footer";
import NavBar from "componnets/NavBar";

const DashBoard = () => {
    return (
        <>
          <NavBar />
           <div className="container">
             <h1 className="text-primary py-3">DashBoard de Vendas</h1>
             <div className="row px-3">
               <div className="col-sm-6">
                   <h5 className="text-center text-secondary">
                     Taxa de sucesso(%)
                   </h5>
                    <BarChat />
               </div>
               <div className="col-sm-6">
                  <h5 className="text-center text-secondary">
                     Taxa de sucesso(%)
                   </h5>
                    <DonutChart />
               </div>
             </div>
    
            <div className="py-3"> 
              <h2 className="text-primary">Todas Vendas</h2>
            </div>
            <DataTable />
           </div>
           <Footer />
          </>
      );
}
export default DashBoard;