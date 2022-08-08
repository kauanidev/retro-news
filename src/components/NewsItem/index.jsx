import { NewsItemContainer } from "./styles";

export function NewsItem({ data }) {
  const formattedDate = new Date(data.published).toLocaleDateString("pt-BR");

  return (
    <NewsItemContainer to="/detailedNews" state={data}>
      <div>
        <img src={data.image} alt="news" />
      </div>
      <section>
        <span>{formattedDate}</span>
        <p>{data.title}</p>
      </section>
    </NewsItemContainer>
  );
}
