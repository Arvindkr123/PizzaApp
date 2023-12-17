import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Success } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/success"
        element={<ProtectedRoute element={<Success />} />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
