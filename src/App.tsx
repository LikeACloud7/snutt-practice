import './reset.css';
import './index.css';

import { useState } from 'react';

import { LoginPage } from './pages/LoginPage';
import { MyPage } from './pages/MyPage';

export const App = () => {
  const [token, setToken] = useState<string | null>(null);

  if (token !== null) {
    return (
      <div>
        <MyPage />
      </div>
    );
  }
  return (
    <div>
      <LoginPage setToken={setToken} />
    </div>
  );
};
