import React from "react";
import { observer } from "mobx-react-lite";
import {
  ProductContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductElements";
import CustomizeList from "../DropDown_Cust/index";
import Cart from "../Cart";
import {products_data} from "./Data";

const Products = observer(({ heading }) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {products_data.productsData.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <CustomizeList
                  key={index}
                  product_index={index}
                  //   DataS={customizeSize}
                  //   DataSauceCheese={SauceAndCheese}
                  //   DataVegTs={VegToppings}
                  //   DataMeatTs={meatToppings}
                  //   DataExtraF={extraFlavour}
                />
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
        <Cart />
        {/* <DropDownCust DataS={customizeSize} DataSauceCheese={SauceAndCheese} DataVegTs={VegToppings} DataMeatTs={meatToppings} DataExtraF={extraFlavour} /> */}
      </ProductWrapper>
    </ProductContainer>
  );
});

export default Products;
