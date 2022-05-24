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
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
