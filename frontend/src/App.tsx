import DataTable from "componnets/DataTable"
import Footer from "componnets/Footer"
import NavBar from "componnets/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
       <div className="container">
         <h1 className="text-primary">hello world</h1>

        <DataTable />
       </div>
       <Footer />
      </>
  );
}

export default App;
