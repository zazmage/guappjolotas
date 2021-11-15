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
