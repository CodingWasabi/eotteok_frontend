import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@/pages/MainPage'));
const NickNamePage = loadable(() => import('@/pages/NickNamePage'));
const SurveyPage = loadable(() => import('@/pages/SurveyPage'));
const ResultPage = loadable(() => import('@/pages/ResultPage'));
const NotFoundPage = loadable(() => import('@/pages/NotFoundPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nickname" element={<NickNamePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
