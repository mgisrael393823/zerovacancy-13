// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaymentConfirmation from './pages/PaymentConfirmation';
import Terms from './pages/Terms';
import FontLoader from './components/FontLoader';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <FontLoader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
