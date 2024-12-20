import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className="flex flex-col items-center gap-[14.5rem] pb-[5.62519rem]">
      <div />
      <div className="flex w-[23rem] flex-col items-center justify-center gap-[8.5rem] bg-white pb-0">
        <div className="flex flex-col items-center gap-4">
          <img src="/src/assets/snutt-logo.svg" alt="logo" />
          <p className="text-center text-[1.33456rem] font-[860] not-italic leading-normal text-Text-Normal">
            TimeTable
          </p>
        </div>

        <div className="flex w-[23rem] flex-col items-center gap-10">
          <div className="flex flex-col items-start gap-2.5 px-8 py-0">
            <div className="flex w-[19.4375rem] flex-col items-center gap-3.5">
              <button
                className="flex items-center justify-center gap-[0.3125rem] self-stretch rounded-md bg-SNUTT-orange p-3 text-Text-onBG hover:opacity-80"
                onClick={handleLogin}
              >
                로그인
              </button>
              <button
                className="flex flex-col items-start justify-center gap-2.5"
                onClick={() => {}}
                style={{ cursor: 'not-allowed' }}
              >
                <div className="flex items-center gap-1 text-Text-Plain">
                  회원가입
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-3 py-0">
            <div className="flex w-[21.9375rem] flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-2.5 self-stretch">
                <hr className="h-[0.04688rem] w-[6rem] bg-Text-Assistive" />
                <p className="non-italic items-center text-sm font-medium text-Text-Assistive">
                  SNS 계정으로 계속하기
                </p>
                <hr className="h-[0.04688rem] w-[6rem] bg-Text-Assistive" />
              </div>
              <div className="flex items-center gap-3">
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/src/assets/kakaotalk.png" alt="kakaotalk" />
                </button>
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/src/assets/google.png" alt="google" />
                </button>
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/src/assets/facebook.png" alt="facebook" />
                </button>
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/src/assets/apple.png" alt="apple" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
