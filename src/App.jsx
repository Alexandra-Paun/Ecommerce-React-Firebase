import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import MyState from "./context/data/MyState";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/ecommerce-react-firebase/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path="/ecommerce-react-firebase/cart/" element={<Cart />} />
          <Route path="/ecommerce-react-firebase/dashboard/" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
          <Route path="/ecommerce-react-firebase/productinfo/" element={<ProductInfo />} />
          <Route path="/ecommerce-react-firebase/login/" element={<Login />} />
          <Route path="/ecommerce-react-firebase/signup/" element={<Signup />} />
          <Route path="/ecommerce-react-firebase/addproduct/" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/ecommerce-react-firebase/updateproduct/" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/ecommerce-react-firebase/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  let admin = JSON.parse(localStorage.getItem('user'))
  if(admin) {
    if (admin.user.email === 'alexandrapaun@gmail.com') {
      return children
    }
  } else {
    return <Navigate to='/ecommerce-react-firebase/login' />
  }
}