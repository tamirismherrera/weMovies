import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;

  @media (min-width: 1000px) {
    max-width: 734px;
  }
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    height: 100%;
    margin-top: 0px;
  }
`;

export const MovieList = styled.main`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 11px;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 11px;
  }
`;
