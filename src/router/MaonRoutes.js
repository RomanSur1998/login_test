import { Route, Routes } from "react-router-dom";
import Auth from "../autn/Auth";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
};
