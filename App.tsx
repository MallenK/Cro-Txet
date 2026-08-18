
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LangLayout from './components/LangLayout';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import LegalPage from './pages/LegalPage';
import { useSavedLangOrDefault } from './context/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RootRedirect: React.FC = () => {
  const urlLang = useSavedLangOrDefault();
  return <Navigate to={`/${urlLang}`} replace />;
};

// Vite's BASE_URL is "/" on Vercel and "/Cro-Txet/" on GitHub Pages (staging);
// react-router's basename must match so client-side routes line up with the served subpath.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

const App: React.FC = () => {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LangLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<LegalPage type="privacy" />} />
          <Route path="returns" element={<LegalPage type="returns" />} />
        </Route>
        <Route path="*" element={<Navigate to="/ca" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
