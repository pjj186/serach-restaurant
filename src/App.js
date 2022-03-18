import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import useCurrentLocation from "./hooks/useCurrentLocation";

export const AppContext = React.createContext();

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const App = () => {
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);
  const { location: currentLocation, error: currentError } =
    useCurrentLocation(geolocationOptions);

  useEffect(() => {
    if (location === undefined) {
      console.log("위치 로딩중");
    } else {
      console.log("위치 로딩끝");
      setLoading(false);
    }
    setLocation(currentLocation);
  }, [currentLocation, location]);

  return (
    <>
      <AppContext.Provider value={{ location, loading }}>
        <GlobalStyles />
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
