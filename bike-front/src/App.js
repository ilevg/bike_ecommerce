import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/scrollTop/ScrollTop";
import AppProviders from "./context/components/AppProviders";
import "./styles/index.scss";

const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const AppRouter = lazy(() => import("./components/AppRouter"));

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Suspense >
          <ScrollTop />
          <Header />
          <AppRouter />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
