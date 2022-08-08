import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NewsContainer } from "./styles";

export function News() {
  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state]);

  if (!state) return <></>;

  const formattedDate = new Date(state.published).toLocaleDateString("pt-BR");

  return (
    <NewsContainer>
      <section>
        <h1>{state.title}</h1>
        <span>
          {formattedDate} por <strong>{state.author}</strong>
        </span>
        <img src={state.image} alt="???" />
        <p>{state.description}</p>
        <a target="_blank" href={state.url}>
          <h2>Ler mais</h2>
        </a>
      </section>
    </NewsContainer>
  );
}
