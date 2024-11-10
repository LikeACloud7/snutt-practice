import './reset.css';

import { useState } from 'react';

import { LoginPage } from './components/LoginPage';
import { MyPage } from './components/MyPage';

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
