import styled from "styled-components";
import { BasePageContainer } from "../../styles/global";

export const HomeContainer = styled(BasePageContainer)`
  h1 {
    font-size: 44px;
  }

  h2 {
    margin-top: 44px;
    margin-bottom: 22px;
    font-size: 33px;
  }

  @media (max-width: 700px) {
    padding: 0px 20px;

    h1,
    h2 {
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 33px;
    }
  }
`;

export const LatestContainer = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  grid-auto-rows: 200px;
  gap: 20px;
  border: 2px solid ${(props) => props.theme.text};
  padding: 25px;

  a:nth-child(1) {
    grid-row: 1 / 3;
  }

  a:nth-child(2) {
    grid-column: 2 / -1;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;

    a:nth-child(1) {
      grid-row: inherit;
    }

    a:nth-child(2) {
      grid-column: inherit;
    }
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const NewsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  row-gap: 35px;
  border: 2px solid ${(props) => props.theme.text};
  padding: 25px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
