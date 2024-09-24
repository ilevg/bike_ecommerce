import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/Loader";
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
        <Suspense fallback={<Loader />}>
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
