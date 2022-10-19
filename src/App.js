import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StatePage from "./components/pages/StatePage";
import HomePage from "./components/pages/HomePage";
import { EffectPage } from "./components/pages/EffectPage";
import ContextPage from "./components/pages/ContextPage";
import RefPage from "./components/pages/RefPage";
import ReducerPage from "./components/pages/ReducerPage";

const App = () => {

  const baseName = (process.env.NODE_ENV === "build") ? process.env.REACT_APP_BASE_URL : ""

  return (
    <BrowserRouter
    basename={baseName}>
      <Routes>
        <Route path={`/state`} element={<StatePage />} />
        <Route path="/" element={<HomePage />}/>
        <Route path="/effect" element={<EffectPage />} />
        <Route path="/context" element={<ContextPage />} />
        <Route path="/ref" element={<RefPage />} />
        <Route path="/reducer" element={<ReducerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;