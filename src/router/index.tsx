import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainPage = loadable(() => import('@/pages/MainPage'));
const NicknamePage = loadable(() => import('@/pages/NicknamePage'));
const SurveyPage = loadable(() => import('@/pages/SurveyPage'));
const ResultPage = loadable(() => import('@/pages/ResultPage'));
const NotFoundPage = loadable(() => import('@/pages/NotFoundPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nickname" element={<NicknamePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
