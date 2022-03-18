import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
