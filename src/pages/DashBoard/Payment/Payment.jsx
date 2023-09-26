import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from '../../../Hooks/useCart';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import CheckoutForm from "./CheckoutForm";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    console.log(cart)
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTittle subHeading="please process" heading="Payment"></SectionTittle>
            {/* <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2> */}
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;