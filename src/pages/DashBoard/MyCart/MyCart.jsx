import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>item.price +sum,0);
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MY CART</title>
      </Helmet>
      <div className="uppercase">
      <h1 className="text-5xl">Total Orders : {cart.length}</h1>
      <h1 className="text-5xl">Total Price :$ {total}</h1>
      <button className="btn btn-active btn-secondary btn-sm">pay</button>
      </div>
    </div>
  );
};

export default MyCart;
