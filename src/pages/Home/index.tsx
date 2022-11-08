import { useEffect, useState } from "react";
import { Header } from "../../componentes/Header";
import { Loader } from "../../componentes/Loader";
import { MovieCard } from "../../componentes/MovieCard";
import { IMovie } from "../../Interfaces";
import api from "../../services/api";
import { Wrapper, Container, MovieList  } from "./styles";

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);

  async function getMovies() {
    await api
      .get("products")
      .then((response: any) => {
        setMovies(response.data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Wrapper>
      <Header/>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <MovieList>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        }
        </MovieList>
        )}
      </Container>
    </Wrapper>
  );
}
