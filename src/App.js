import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
