import { observer } from "mobx-react-lite";
import React from "react";
import {products_data} from "../Products/Data";
import {
  SidebarContainer,
  CartTitle,
  OrderList,
  CartContainer,
} from "./CartElement";
const Cart = observer(() => {
  const total_per_row = products_data.productsData
  .flatMap(el => el.details.dataset)
  .flatMap(el => el.details)
  .map(el => el.price * el.quantity)
  
  const subtotal = total_per_row.reduce((a,b)=>a+b,0)

  return (
    <SidebarContainer>
      <CartTitle>Your Order</CartTitle>
      <div>
        {products_data.productsData[0].details.dataset.map((value, index) => {
          return (
            <div key={index}>
              {value.details
                .filter((el) => el.quantity > 0)
                .map((el, index) => (
                  <OrderList key={index}>
                    <span>{el.name}</span>
                    <span>x{el.quantity}</span>
                    <span>${(el.price * el.quantity).toFixed(2)}</span>
                  </OrderList>
                ))}
            </div>
          );
        })}
      </div>
      <CartContainer>
        <div> Sub Total</div>
        <div>
          $
          {
            subtotal
          }
        </div>
        <div>Tax</div>
        <div>
          $
          {
            products_data.productsData[0].details.dataset
              .map(
                (val) =>
                  val.details
                    .map((subVal) => subVal.quantity * subVal.price)
                    .reduce((a, b) => a + b, 0) * 0.09975
              )
              .toString()
              .match(/^-?\d+(?:\.\d{0,2})?/)[0]
          }
        </div>
        <div>Total</div>
        <div>
          $
          {
            (
              products_data.productsData[0].details.dataset.map((val) =>
                val.details
                  .map((subVal) => subVal.quantity * subVal.price)
                  .reduce((a, b) => a + b, 0)
              ) +
              products_data.productsData[0].details.dataset.map(
                (val) =>
                  val.details
                    .map((subVal) => subVal.quantity * subVal.price)
                    .reduce((a, b) => a + b, 0) * 0.09975
              )
            )
              .toString()
              .match(/^-?\d+(?:\.\d{0,2})?/)[0]
          }
        </div>
      </CartContainer>
    </SidebarContainer>
  );
});

export default Cart;
