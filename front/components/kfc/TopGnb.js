import React from 'react';
import Link from 'next/link';

const Gnb = () => {
  return (
    <div>
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

export default Gnb;
