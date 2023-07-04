import React from 'react';
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

const NavTab = () => {
  return (
    <nav css={NavTabStyle}>
      <h3 className="sr-only">네비게이션</h3>
      <ul>
        <li>
          <button type="button">추천메뉴</button>
        </li>
        <li>
          <button type="button">치킨</button>
        </li>
        <li>
          <button type="button">버거/세트/박스</button>
        </li>
        <li>
          <button type="button">사이드</button>
        </li>
        <li>
          <button type="button">음료</button>
        </li>
      </ul>
    </nav>
  );
};

const NavTabStyle = css`
  & > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    & > li {
      flex: 1;
      height: 8rem;
      margin: 2rem 0;
      button {
        display: block;
        width: 100%;
        height: 100%;
        background-color: ${theme.color.bg1};
        border: 0;
      }
    }
  }
`;

export default NavTab;
