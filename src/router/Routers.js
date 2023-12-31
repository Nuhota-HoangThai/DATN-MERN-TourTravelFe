import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//import Page

import HomePage from "./../pages/HomePage";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import SearchResultList from "./../pages/SearchResultList";
import TourDetails from "./../pages/TourDetails";
import ToursPage from "./../pages/ToursPage";
import ThanksPage from "./../pages/ThanksPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/tours" element={<ToursPage />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/thanks" element={<ThanksPage />} />
    </Routes>
  );
};

export default Routers;
