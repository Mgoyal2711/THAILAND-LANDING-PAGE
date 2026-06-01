import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import ScrollToTop from "./components/ScrollToTop";

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CancelPage = lazy(() => import('./pages/CancelPage'));

export default function App() {
  return (
    <BrowserRouter basename="/">

      <ScrollToTop />

      <Suspense fallback={null}>
        <Routes>

          <Route element={<AppLayout />}>

            <Route index element={<HomePage />} />

            <Route path="about" element={<AboutPage />} />

            <Route path="contact" element={<ContactPage />} />

            <Route path="privacy" element={<PrivacyPage />} />

            <Route path="terms" element={<TermsPage />} />

            <Route path="cancel" element={<CancelPage />} />

          </Route>

        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}
