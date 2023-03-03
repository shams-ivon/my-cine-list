import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = (props) => {

  const { data: movies } = useFetch(props.apiPath);
  
  const renderMovies = movies.map(movie => {
    return (
      <Card 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        poster={movie.poster_path}
      />
    );
  });

  useTitle(props.title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {renderMovies}
        </div>
      </section>
    </main>
  );
}
