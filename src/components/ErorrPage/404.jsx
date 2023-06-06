import { useRouteError } from "react-router-dom";

const ErorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1 style={{ color: "red" }}>OOPS!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErorPage;
