import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  const { message, statusText } = error ?? {};

  return (
    <div id="error-page" className="min-h-screen grid place-content-center text-center gap-4">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message || statusText || "Unknown error"}</i>
      </p>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
}
