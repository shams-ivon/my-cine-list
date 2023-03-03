import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

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

  useTitle(`Search result for '${queryTerm}'`);

  return (
    <main>
      <section className="py-5">
        <p className="text-center text-3xl text-gray-700 dark:text-white">
          {movies.length === 0? `No result found for '${queryTerm}'`: `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {renderMovies}
        </div>
      </section>
    </main>
  );
}
