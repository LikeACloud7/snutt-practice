import './reset.css';
import './index.css';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { MyPage } from './pages/MyPage';
import { SignInPage } from './pages/SignInPage';

export const App = () => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token != null ? <MyPage /> : <LoginPage />} />
        <Route path="/login" element={<SignInPage setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
};
