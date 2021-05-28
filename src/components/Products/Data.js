import {makeAutoObservable} from "mobx";
import product1 from "../../Assets/product1.jpg";
import product2 from "../../Assets/product2.jpg";
import product3 from "../../Assets/product3.jpg";
import {MainDataClass} from "../DropDown_Cust/main_data";

class ProductsData {
  constructor() {
    makeAutoObservable(this)
  }
  productsData = [
    {
      img: product1,
      alt: "pizza",
      name: "Supreme Pizza",
      desc:
        " Marinara sauce, basil, Italian sausages, Roma Tomatoes, Olives and Pesto",
      price: "$19.99",
      button: "Add to Cart",
      details: new MainDataClass()
    },
    {
      img: product2,
      alt: "pizza",
      name: "Hawalian Pizza",
      desc:
        " Marinara sauce, basil, Italian sausages, Roma Tomatoes, Olives and Pesto",
      price: "$16.99",
      button: "Add to Cart",
      details: new MainDataClass()
    },
    {
      img: product3,
      alt: "pizza",
      name: "Veggie Overload Pizza",
      desc:
        " Marinara sauce, basil, Italian sausages, Roma Tomatoes, Olives and Pesto",
      price: "$14.99",
      button: "Add to Cart",
      details: new MainDataClass()
    },
  ];
}

export const products_data = new ProductsData()
window.products_data = products_data
