import React from "react";
import Wrap from "components/kfc/Wrap";
import { css } from "@emotion/react";
import theme from "assets/styles/theme";
import ALink from "components/kfc/ALink";

const kfc = () => {
  return (
    <>
      <Wrap>
        <section css={sectionStyle}>
          <section className="lang">
            <h3 className="sr-only">언어선택</h3>
            <button>한국어</button>
            <button>English</button>
          </section>
          <section className="order">
            <h2>여기에서 주문하세요</h2>
            <p>Order Here!</p>
            <ALink lnk="/kfc/order">주문하기</ALink>
            {/* 카드 및 간편결제 적용 이미지 */}
          </section>
        </section>
      </Wrap>
    </>
  );
};
const sectionStyle = css`
  height: 100%;
  background: white;
  & > .order {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin: 2rem 0 0 0;
      font-size: 7rem;
      text-align: center;
      word-break: keep-all;
      line-height: 1.2;
    }
    p {
      margin: 0;
      padding: 0 0 3rem 0;
      font-size: 3rem;
      font-weight: 600;
    }
  }
  & > .lang {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 20rem;
    padding: 5rem 0 2rem 0;
    margin: 0 auto;
    & > button {
      flex: 1;
      height: 4rem;
      background-color: ${theme.color.main};
      border: none;
      border-radius: 0.5rem;
      color: white;
      font-weight: 600;
      font-size: ${theme.size.base};
    }
  }
`;

export default kfc;
