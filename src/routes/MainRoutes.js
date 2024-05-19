import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Currency from "../pages/currencyy/currency";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/currency'} replace/>}/>
      <Route path={'/weather'} element={null}/>
      <Route path={'/got'} element={null}/>
      <Route path={'/currency'} element={<Currency />}/>
    </Routes>
  );
};

export default MainRoutes;