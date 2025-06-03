import { lazy, Suspense } from "react";
import "./styles/global/App.scss";
import { Route, Routes } from "react-router-dom";
import { LoaderContent } from "./ui/Loader/LoaderContent/LoaderContent";

const Layout = lazy(() => import("./pages/Layout/Layout"));

function App() {
  return (
    <>
      <Suspense fallback={<LoaderContent className={'loader'} />}>
        <Routes>
          <Route path={"/"} element={<Layout />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
