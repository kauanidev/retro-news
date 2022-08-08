import styled from "styled-components";
import { BasePageContainer } from "../../styles/global";

export const NewsContainer = styled(BasePageContainer)`
  padding: 0px 20px;

  section {
    border: 2px solid ${(props) => props.theme.text};
    display: flex;
    flex-direction: column;
    padding: 30px;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: sepia(100%);
    margin: 50px 0;
  }

  h1 {
    font-size: 44px;
    margin-bottom: 15px;
  }

  p {
    font-size: 20px;
    text-align: justify;

    &::first-letter {
      font-size: 40px;
      font-weight: bold;
    }
  }

  a {
    border: 2px solid ${(props) => props.theme.text};
    width: max-content;
    padding: 5px 20px;
    margin-top: 50px;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 33px;
    }

    img {
      height: 300px;
    }
  }

  @media (max-width: 550px) {
    a {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 24px;
    }

    img {
      height: 200px;
      margin: 30px 0px;
    }

    p {
      font-size: 18px;

      &::first-letter {
        font-size: 33px;
      }
    }

    a {
      margin-top: 30px;
    }
  }
`;
