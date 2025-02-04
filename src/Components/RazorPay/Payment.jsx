import React from 'react';

const Payment = ({ product, selectedSize, selectedColor, quantity }) => {
    const handlePayment = async () => {
        // You can make an API call here to your backend to create an order
        // and get the payment details (like amount and order_id)
      
        // Example: You need to send the total amount to your server to create an order.
        const amount = parseInt(product.price.replace('₹', '')) * quantity;
        const orderData = {
          amount: amount * 100, // Razorpay expects the amount in paise, hence multiply by 100
          currency: 'INR',
          receipt: `order_rcptid_${new Date().getTime()}`,
        };
      
        try {
          // Send a request to your backend to create an order (backend API should integrate Razorpay)
          const response = await fetch('/api/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
          });
      
          if (!response.ok) {
            throw new Error('Failed to create order');
          }
      
          const order = await response.json();
          
          // Ensure we have the necessary properties
          if (!order.orderId || !order.signature || !order.key) {
            throw new Error('Invalid order data received');
          }
      
          const { orderId, signature, key } = order;
      
          // Now initiate Razorpay payment
          const options = {
            key: key, // Your Razorpay key
            amount: orderData.amount, // Amount to be paid
            currency: orderData.currency,
            name: product.name,
            description: `${product.name} - ${selectedSize} - ${selectedColor}`,
            image: product.image,
            order_id: orderId, // The order ID you received from backend
            handler: function (response) {
              // Handle success here
              alert('Payment Successful');
              console.log('Payment Response:', response);
              // You can send the payment response to your backend to update the order status
            },
            prefill: {
              name: 'Customer Name', // You can dynamically add the name of the customer here
              email: 'customer@example.com',
              contact: '9999999999', // Customer's contact number
            },
            notes: {
              size: selectedSize,
              color: selectedColor,
              quantity: quantity,
            },
            theme: {
              color: '#3399cc', // Customize button color
            },
          };
      
          const rzp = new window.Razorpay(options);
          rzp.open();
      
        } catch (error) {
          console.error('Error:', error);
        }
      };
      

  return (
    <div>
      {/* Payment Details */}
      <div className="sm:text-sm text-xs font-semibold my-4">
        <h2>Order Summary</h2>
        <p>Product: {product.name}</p>
        <p>Size: {selectedSize}</p>
        <p>Color: {selectedColor}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ₹{parseInt(product.price.replace('₹', '')) * quantity}</p>
      </div>

      {/* Razorpay Button */}
      <button
        onClick={handlePayment}
        className="buttonp text-white font-bold py-2 px-4 rounded-lg w-full mt-4"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Payment;
