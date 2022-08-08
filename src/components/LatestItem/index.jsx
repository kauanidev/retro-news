import { LatestItemContainer } from "./styles";

export function LatestItem({ data }) {
  return (
    <LatestItemContainer to="/detailedNews" state={data} image={data.image}>
      <p>{data.title}</p>
    </LatestItemContainer>
  );
}
