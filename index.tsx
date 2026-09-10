
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { Analytics } from "@vercel/analytics/react"

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Analytics />
    </HelmetProvider>
  </React.StrictMode>
);

// Fade out the pre-hydration boot loader (index.html) once React has painted.
requestAnimationFrame(() => {
  const boot = document.getElementById('app-boot');
  if (!boot) return;
  boot.classList.add('is-hidden');
  setTimeout(() => boot.remove(), 500);
});
