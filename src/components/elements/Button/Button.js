import React from "react";
import * as S from "./ButtonStyled";

const Button = ({ onClick, children }) => {
    return (
        <S.ButtonContainer onClick={onClick}>{children}</S.ButtonContainer>
    );
}

export default Button;