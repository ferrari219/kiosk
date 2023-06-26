import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

const Gnb = () => {
  return (
    <div css={GnbStyle}>
      <h2 className="sr-only">GNB</h2>
      <ul>
        <li>
          <Link href="/kfc">Home</Link>
        </li>
        <li>
          <Link href="/">사용안내</Link>
        </li>
        <li>
          <Link href="/">영업정보</Link>
        </li>
        <li>
          <Link href="/">Language</Link>
        </li>
      </ul>
    </div>
  );
};

const GnbStyle = css`
  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    a {
      font-size: ${theme.size.sm};
      color: ${theme.color.pt};
    }
    li + li {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -1rem;
        top: 0.5rem;
        width: 0.1rem;
        height: 1.5rem;
        background-color: ${theme.color.pt};
      }
    }
  }
`;

export default Gnb;
