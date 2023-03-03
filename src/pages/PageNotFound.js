import { Link } from "react-router-dom";
import { Button } from "../components";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = (props) => {

  useTitle(props.title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10">404, page not found</p>
        </div>
        <div  className="flex justify-center my-4">
          <Link to="/">
            <Button text={"Back to Home"} />
          </Link>
        </div>
      </section>
    </main>
  );
}
