import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

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
    gap: 1rem;
  }
`;

export default Gnb;
