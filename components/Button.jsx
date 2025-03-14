'use client';

import '@/styles/components/Button.scss';
import { useRouter } from 'next/navigation';

function Button({ children, href, color }) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={`c-button c-button--${color}`}
      onClick={href ? handleClick : null}
    >
      {children}
      <div className={`c-button__icon c-button__icon--${color}`}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M1.05403 31.6175C0.271626 32.3972 0.271626 33.6614 1.05403 34.441C1.83644 35.2207 3.10497 35.2207 3.88737 34.441L1.05403 31.6175ZM35.5599 2.05152C35.5599 0.948871 34.6629 0.0549994 33.5564 0.0549994L15.5251 0.0549994C14.4187 0.0549994 13.5217 0.948871 13.5217 2.05152C13.5217 3.15416 14.4187 4.04804 15.5251 4.04804H31.5529V20.0202C31.5529 21.1228 32.4499 22.0167 33.5564 22.0167C34.6629 22.0167 35.5599 21.1228 35.5599 20.0202L35.5599 2.05152ZM3.88737 34.441L34.9731 3.46327L32.1397 0.639766L1.05403 31.6175L3.88737 34.441Z"
              fill={color === 'milch' ? '#4d3d30' : '#ffffff'}
            />
          </svg>
        </span>
      </div>
    </button>
  );
}

export default Button;
