import React from "react";
import * as S from "./LayoutStyled.js";

const Layout = ({ children }) => {
  return <S.LayoutContainer>{children}</S.LayoutContainer>;
};

export default Layout;
