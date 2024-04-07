import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Master from './Component/Master/Master';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import DetailsContextProvider, { DetailsContext } from './Component/Context/Details';

function App() {
  let router=createBrowserRouter([
    {path:'',element:<Master/>,children:[
      {path:'',element:<Login/>},
      {path:'Login',element:<Login/>},
      {path:'Regester',element:<Register/>}
    ]}
  ])
  return (
    <>
    <DetailsContextProvider>
    <RouterProvider router={router}>

</RouterProvider>

    </DetailsContextProvider>

    
    
    </>
  
  );
}

export default App;
