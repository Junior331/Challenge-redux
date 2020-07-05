import styled from 'styled-components'

const HomeContainer = styled.div`
    display: flex;
    flex-direction:column;
`
const SubContainer = styled.div`
    display: flex;
    width: 370px;

`
const Title = styled.p`
  width: 100%;
  display: flex;
  color: #0000008f;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "Poppins", sans-serif;
`;
export { HomeContainer, SubContainer, Title }