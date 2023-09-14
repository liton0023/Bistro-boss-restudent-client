import {
    FaBahai,
    FaBars,
    FaBook,
    FaCalendarAlt,
    FaFileContract,
    FaHome,
    FaShoppingBag,
    FaShoppingCart,
    FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {

    const [cart]=useCart();
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-[D1A054] p-4 w-80 min-h-full bg-base-200 text-base-content uppercase">
          {/* Sidebar content here */}
          <li>
            <NavLink to="dashboard/userhome">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/booking">
              <FaCalendarAlt></FaCalendarAlt>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/payment">
              <FaWallet></FaWallet>Payment Histry
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/mycart">
              <FaShoppingCart></FaShoppingCart>My Cart
              <span className="badge badge-secondary">+{cart.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/review">
              <FaBahai></FaBahai> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/booking">
              <FaBook></FaBook> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars></FaBars>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <FaShoppingBag></FaShoppingBag>Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaFileContract></FaFileContract>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
