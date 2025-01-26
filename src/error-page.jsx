import { useRouteError } from "react-router-dom";
import "./App.css"
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" w-screen flex flex-col items-center justify-center" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}