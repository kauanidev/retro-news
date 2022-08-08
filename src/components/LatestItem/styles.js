import { Link } from "react-router-dom";
import styled from "styled-components";

export const LatestItemContainer = styled(Link)`
  height: 100%;
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  filter: sepia(100%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  color: ${(props) => props.theme.white};
  font-size: 18px;
  transition: 0.4s;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 3px;

  &:hover {
    filter: sepia(100%) brightness(1.3);
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
