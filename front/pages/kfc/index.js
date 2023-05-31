import React from 'react';
import Link from 'next/link';

const kfc = () => {
  return (
    <>
      <section>
        <div>
          <h3>언어선택</h3>
          <button>한국어</button>
          <button>English</button>
        </div>
        {/* <h1>KFC</h1> */}
        <h2>여기에서 주문하세요</h2>
        <p>Order Here!</p>
        <Link href="/kfc/order">주문하기</Link>
        {/* 카드 및 간편결제 적용 이미지 */}
      </section>
    </>
  );
};

export default kfc;
