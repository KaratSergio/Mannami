import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import EventDetailsPage from '@pages/EventDetailsPage/EventDetailsPage';
import UserProfilePage from '@pages/UserProfilePage/UserProfilePage';
import PremiumPage from '@pages/PremiumPage/PremiumPage';
import RecommendationsPage from '@pages/RecommendationsPage/RecommendationsPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';

const RoutesConfig: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/event/:id" element={<EventDetailsPage />} />
    <Route path="/profile" element={<UserProfilePage />} />
    <Route path="/premium" element={<PremiumPage />} />
    <Route path="/recommendations" element={<RecommendationsPage />} />
    <Route path="/registration" element={<RegistrationPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default RoutesConfig;
