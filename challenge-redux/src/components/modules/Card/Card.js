import React from 'react';
import * as S from './CardStyled'

const Card = ({ children }) => {
  return (
    <S.CardContainer>
      {children}
    </S.CardContainer>
  );
};

export default Card;