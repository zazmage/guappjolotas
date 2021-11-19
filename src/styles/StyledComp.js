import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
   box-sizing: border-box; 
   scroll-behavior: smooth;
  };
  body{
    margin:0;
    padding: 24px;
    background-color: ${colors.background};
    font-family: Inter, sans-serif;
  }
`;

export const Drnwb = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Drnwl = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const MainLogo = styled.img`
  width: 64px;
  height: 64px;
`;

export const MainTitle = styled.h1`
  font-size: 34px;
  font-weight: 700;
`;

export const SecTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
`;

export const InputSearch = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  height: 60px;
  background-color: ${colors.secundary};
  border-radius: 40px;
  & img {
    width: 18px;
    height: 18px;
  }
  & input {
    border: none;
    background-color: inherit;
    color: ${colors.secundaryText};
    font-size: 17px;
    font-weight: 400;
    &:focus {
      outline: none;
    }
  }
`;

export const ProdListItem = styled.div`
  background-color: ${colors.secBackground};
  width: 100%;
  height: 112px;
  border-radius: 20px;
  margin-bottom: 8px;
  overflow: hidden;
  cursor: pointer;
  padding: 16px;
  & img {
    margin-right: 16px;
  }
  & h3 {
    color: ${colors.primaryText};
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  & p {
    color: ${colors.primary};
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
`;

export const SliderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${colors.secBackground};
  overflow: hidden;
`;

export const SliderElem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  & .not-selected {
    width: 70px;
    height: 70px;
    margin: 0 10px 0 10px;
  }
  & .is-selected {
    width: 170px;
    height: 170px;
    margin: 0 10px 0 10px;
  }
  & h3 {
    margin: 0 0 8px 0;
    font-size: 22px;
    font-weight: 600;
  }
  & p {
    margin: 0 0 32px 0;
    color: ${colors.primary};
  }
`;

export const ProdInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 312px;
  height: auto;
  margin: 0 auto 32px auto;
  font-family: Inter, sans-serif;
  & h3 {
    font-size: 28px;
    font-weight: 600;
    margin: 15px 0 8px 0;
    padding: 0 20% 0 20%;
  }
  & p {
    font-size: 22px;
    font-weight: 600;
    color: ${colors.primary};
    margin: 0 0 32px 0;
  }
  & div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.background};
    width: 190px;
    height: 72px;
    border-radius: 20px;
    & p {
      color: ${colors.primaryText};
      margin: 0;
    }
  }
`;

export const FlavorCont = styled.div`
  padding: 10px 24px 10px 24px;
  background-color: ${colors.background};
  font-family: Inter, sans-serif;
  & div {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-evenly;
    gap: 40px 60px;
  }
  & img {
    cursor: pointer;
  }
  & h2 {
    margin: 0 0 15px 0;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ComboCont = styled.div`
  padding: 40px 24px 10px 24px;
  font-family: Inter, sans-serif;
  background-color: ${colors.background};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  font-family: Inter, sans-serif;
  & h2 {
    background-color: ${colors.background};
    margin: 0 0 8px 0;
    font-size: 20px;
    font-weight: 600;
  }
  & p {
    color: ${colors.secundaryText};
    margin: 0 0 24px 0;
  }
`;

export const ComboItem = styled.div`
  margin: 0 8px 8px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 115px;
  height: 130px;
  border-radius: 20px;
  padding: 16px;
  background-color: ${colors.secBackground};
  & div {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
  }
  & h3 {
    margin: 0 0 4px 0;
    font-weight: 600;
    font-size: 12px;
  }
  & p {
    margin: 0;
    color: ${colors.primary};
    font-size: 12px;
    font-weight: 600;
  }
`;

export const ShopCartCont = styled.div`
  padding: 45px 24px 1px 24px;
  font-family: Inter, sans-serif;
  header {
    display: flex;
    align-items: center;
    h2 {
      font-size: 17px;
      font-weight: 600;
      text-align: center;
      width: 100%;
    }
  }
`;

export const ShopCart = styled.div`
  height: 85vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  table {
    overflow: hidden;
    height: 100%;
    th {
      text-align: center;
    }
    .centNumb {
      text-align: center;
    }
  }
  button {
    color: var(--secundary);
    background-color: var(--primary);
    width: 312px;
    height: 69px;
    border: none;
    border-radius: 40px;
    margin-top: 16px;
    margin-bottom: 16px;
    h4 {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .not-products {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100%;
    img {
      width: 115px;
    }
    p {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;
