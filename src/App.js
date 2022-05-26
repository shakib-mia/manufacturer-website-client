import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/shared/Navbar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import MyPortfolio from "./components/pages/MyPortfolio";
import { ToastContainer } from "react-toastify";
import Dashbord from "./components/pages/Dashboard/Dashbord";
import MyOrders from "./components/pages/Dashboard/MyOrders";
import MyProfile from "./components/pages/Dashboard/MyProfile";
import AddReview from "./components/pages/Dashboard/AddReview";
import Purchase from "./components/pages/Purchase";
import RequireAuth from "./RequireAuth";
import Blogs from "./components/pages/Blogs";
import AddProduct from "./components/pages/Dashboard/AddProduct";
import MakeAdmin from "./components/pages/Dashboard/MakeAdmin";
import MaangeProducts from "./components/pages/Dashboard/MaangeProducts";
import ManageOrder from "./components/pages/Dashboard/ManageOrder";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about-me" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/dashboard" element={<Dashbord></Dashbord>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="add-product" element={<AddProduct></AddProduct>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route
            path="manage-products"
            element={<MaangeProducts></MaangeProducts>}
          ></Route>
        </Route>
        <Route
          path="/purchase/:_id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
