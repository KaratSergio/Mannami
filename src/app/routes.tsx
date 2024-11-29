import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const EventListPage = React.lazy(() => import('@pages/EventListPage/EventListPage'));
const EventDetailsPage = React.lazy(() => import('@pages/EventDetailsPage/EventDetailsPage'));
const UserProfilePage = React.lazy(() => import('@pages/UserProfilePage/UserProfilePage'));
const PremiumPage = React.lazy(() => import('@pages/PremiumPage/PremiumPage'));
const RecommendationsPage = React.lazy(() => import('@pages/RecommendationsPage/RecommendationsPage'));
const ErrorPage = React.lazy(() => import('@pages/ErrorPage/ErrorPage'));
const RegistrationPage = React.lazy(() => import('@pages/RegistrationPage/RegistrationPage'));
const LoginPage = React.lazy(() => import('@pages/LoginPage/LoginPage'));

const RoutesConfig: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
      </Route>

      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Suspense>
);

export default RoutesConfig;
