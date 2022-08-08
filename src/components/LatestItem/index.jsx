import { LatestItemContainer } from "./styles";

export function LatestItem({ data }) {
  return (
    <LatestItemContainer to="/detailedNews" state={data}>
      <p>{data.title}</p>
    </LatestItemContainer>
  );
}
