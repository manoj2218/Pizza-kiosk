import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 80px auto 100px 100px;
  height: 100vh;
`;

export const CartTitle = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const OrderList = styled.div`
  display: grid;
  margin-left: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: auto 80px;
  margin-left: 20px;
  text-align: left;
`;
