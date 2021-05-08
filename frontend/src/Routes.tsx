import DashBoard from 'pages/DashBoard';
import Home from 'pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
           <switch>
               <Route path="/" exact>
                   <Home />
               </Route>
               <Route path="/dashboard">
                   <DashBoard />
               </Route>
           </switch>
        </BrowserRouter>
    );
}
export default Routes;