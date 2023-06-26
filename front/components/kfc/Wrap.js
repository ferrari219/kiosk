import React from 'react';
import { css } from '@emotion/react';
import Img from 'next/image';
import LogoW from 'assets/images/common/logo_kfc_w.png';
import theme from 'assets/styles/theme';

const Wrap = ({ children }) => {
  return (
    <div css={wrapLayoutStyle}>
      <section className="machine">
        <h2>{/* <Img src={LogoW} alt="KFC" /> */}</h2>
        <div className="content">{children}</div>
      </section>
    </div>
  );
};
const wrapLayoutStyle = css`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;
  & > .machine {
    max-width: 90rem;
    height: 100%;
    background-color: ${theme.color.pt};
    border-radius: 2rem;
    & > h2 {
      margin: 0;
      padding: 1rem 0 0 0;
      text-align: center;
      & > img {
        width: 100%;
        max-width: 8.5rem;
        height: auto;
      }
    }
    & > .content {
      height: 70%;
      margin: 0 2rem;
      padding: 0;
      border: 0.5rem solid rgba(0, 0, 0, 0.3);
    }
  }
`;

export default Wrap;
