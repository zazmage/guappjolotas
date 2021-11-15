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
  }
`;

export const Drnwb = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
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

export const DivRowLeft = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding-left: 72px;
  padding-right: 72px;
  & button {
    margin-right: 20px;
    font-size: 16px;
  }
`;

export const DivColNoWrap = styled.div`
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-evenly;
  height: 100%;
`;

export const DescriptionText = styled.p.attrs((props) => ({
  textColor: props.textColor,
}))`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.textColor};
`;
