import React from "react";
import * as S from "./HeaderStyled";

const Header = (props) => {
  console.log(props);
  return (
    <S.HeaderContainer>
      <S.H1>Searching Github User</S.H1>
      <S.Img src={props.owner?.avatar_url} alt=""></S.Img>
    </S.HeaderContainer>
  );
};

export default Header;
