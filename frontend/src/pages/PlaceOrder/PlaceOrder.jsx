import React, { useContext, useEffect, useState } from 'react'; // Import useState hook

import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  // Initialize state using useState hook
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  // Update state when input values change
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // },[data])

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart")
    }
    else if (getTotalCartAmount() === 0) {
      navigate("/cart")
    }
  })


  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          {/* Add name attributes to inputs */}
          <input required type="text" name="firstName" placeholder='First Name' onChange={onChangeHandler} />
          <input required type="text" name="lastName" placeholder='Last Name' onChange={onChangeHandler} />
        </div>
        <input required type="email" name="email" placeholder='Email address' onChange={onChangeHandler} />
        <input required type="text" name="street" placeholder='Street' onChange={onChangeHandler} />
        <div className="multi-fields">
          <input required type="text" name="city" placeholder='City' onChange={onChangeHandler} />
          <input required type="text" name="state" placeholder='State' onChange={onChangeHandler} />
        </div>
        <div className="multi-fields">
          <input required type="text" name="zipcode" placeholder='Zip code' onChange={onChangeHandler} />
          <input required type="text" name="country" placeholder='Country' onChange={onChangeHandler} />
        </div>
        <input required type="text" name="phone" placeholder='Phone' onChange={onChangeHandler} />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
