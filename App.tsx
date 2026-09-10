
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import LangLayout from './components/LangLayout';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import LegalPage from './pages/LegalPage';
import Faq from './pages/Faq';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';
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

/** Unknown top-level path (no language prefix): keep the path, prepend the saved/default language. */
const LangPrefixRedirect: React.FC = () => {
  const urlLang = useSavedLangOrDefault();
  const { pathname, search, hash } = useLocation();
  return <Navigate to={`/${urlLang}${pathname}${search}${hash}`} replace />;
};

// Vite's BASE_URL is "/" on Vercel and "/Cro-Txet/" on GitHub Pages (staging);
// react-router's basename must match so client-side routes line up with the served subpath.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
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
          <Route path="faq" element={<Faq />} />
          <Route path="gracias" element={<Thanks />} />
          <Route path="privacy" element={<LegalPage type="privacy" />} />
          <Route path="returns" element={<LegalPage type="returns" />} />
          <Route path="terms" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<LangPrefixRedirect />} />
      </Routes>
    </Router>
    </MotionConfig>
  );
};

export default App;
