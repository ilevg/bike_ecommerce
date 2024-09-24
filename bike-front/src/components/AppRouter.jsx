import { Suspense, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "../router/routes";

const AppRouter = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const routeElements = useRoutes(
    routes({
      setUsername: setEmail,
      setIsLoggedIn,
      serverMessage,
      setServerMessage,
      isLoggedIn,
      email,
    })
  );

  return <Suspense>{routeElements}</Suspense>;
};

export default AppRouter;
