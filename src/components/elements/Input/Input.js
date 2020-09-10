import React from "react";
import * as S from "./InputStyled";

const Input = (props) => {
  return (
    <S.InputContainer
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></S.InputContainer>
  );
};

export default Input;
