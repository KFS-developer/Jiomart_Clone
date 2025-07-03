import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { cartData } = useSelector((state) => state.cartData);
  const cartItems = cartData || [];

  const navative = useNavigate()

  let totalPriceINR = 0;
  cartItems.forEach(item => {
    totalPriceINR += item.price * item.quantity;
  });

  const INR_TO_USD_RATE = 83;
  const totalPriceUSD = (totalPriceINR / INR_TO_USD_RATE).toFixed(2);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AYC6LHz7w9RKeRfc-mll_QJbOYnzhxE_rnAKIoGZLooVQ-tcL_ZW0n177-SjFpk91csGOEAMe5P7KthU&currency=USD";
    script.addEventListener("load", () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPriceUSD,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              navative("/")
              alert("Transaction completed by " + details.payer.name.given_name);
            });
          },
        }).render("#paypal-button-container");
      }
    });
    document.body.appendChild(script);
  }, [totalPriceUSD]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Complete Payment</h2>
      <p className="mb-6">
        Amount to Pay: ₹{totalPriceINR.toFixed(2)} (~ ${totalPriceUSD})
      </p>
      <div id="paypal-button-container" />
    </div>
  );
};

export default PaymentPage;
