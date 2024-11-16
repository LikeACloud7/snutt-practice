import { useState } from 'react';

import type { UserData } from '../types';

export const SignInPage = ({
  setToken,
}: {
  setToken: (token: string) => void;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState('');

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const loginResponse = await fetch(
        'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/auth/login_local',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: (form.elements.namedItem('id') as HTMLInputElement).value,
            password: (form.elements.namedItem('pw') as HTMLInputElement).value,
          }),
        },
      );

      const loginData = (await loginResponse.json()) as { token: string };
      setToken(loginData.token);

      const userResponse = await fetch(
        'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/users/me',
        {
          headers: {
            'x-access-token': loginData.token,
          },
        },
      );

      const userData = (await userResponse.json()) as UserData;
      setUserNickname(userData.nickname.nickname);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
      alert('로그인에 실패했습니다.');
    }
  };
  if (isLoggedIn) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-xl">{userNickname}</h1>
      </div>
    );
  }

  return (
    <div className="px-8">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => void handleSignin(e)}
      >
        <div>
          <label htmlFor="id">아이디</label>
          <input
            name="id"
            placeholder="아이디를 입력해주세요"
            required
            className="w-full border p-2"
          />
        </div>
        <div>
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            required
            className="w-full border p-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-SNUTT-orange py-3 text-white hover:bg-SNUTT-orange hover:opacity-80"
        >
          로그인하기
        </button>
      </form>
    </div>
  );
};
