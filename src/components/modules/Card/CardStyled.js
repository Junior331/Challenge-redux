import styled from 'styled-components'

const CardContainer = styled.div`
  width: 20em;
  height: 25em;
  margin: 15px;
  display: flex;
  background: white;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
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
export { CardContainer, Title }