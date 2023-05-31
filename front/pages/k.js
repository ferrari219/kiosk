import React from "react";
import Link from "next/link";

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
        <button type="button">주문하기</button>
        {/* 카드 및 간편결제 적용 이미지 */}
      </section>
      <section>
        <h2>메뉴선택하기</h2>
        <header>
          <div>로고</div>
          <div>Home 사용안내 영업정보 Language</div>
        </header>
        <nav>
          <h3>네비게이션</h3>
          <ul>
            <li>
              <span>PROMOTION</span>
              <button>매장행사</button>
            </li>
            <li>
              <span>NEW</span>
              <button>신메뉴</button>
            </li>
            <li>
              <button>치킨</button>
            </li>
            <li>
              <button>버거/세트/박스</button>
            </li>
            <li>
              <button>사이드</button>
            </li>
            <li>
              <button>음료</button>
            </li>
          </ul>
        </nav>
        <section>
          <div>
            메뉴목록
            <span>
              {/*
                name: "닭껍질튀김버켓",
                price: 9900,
                img: "",
                flag: "New", // 기간한정판매, SOLD OUT       
                composition: "닭껍질튀김+텐더5+살사소스",
                desc: "매장 상황에 따라 조기 소진될 수 있습니다."
  */}
            </span>
          </div>
          <div>페이지네이션</div>
        </section>
        <section>
          <div>주문목록</div>
          <div>주문버튼</div>
          <p>화면에 표현된 이미지 사진은 실제와 다를 수 있습니다.</p>
        </section>
      </section>
      <div>
        <h2>상품 구성을 선택해 주세요</h2>
        단품, 세트, 박스 선택하면 V표시 다음
      </div>
      <div>상품명</div>
    </>
  );
};

export default kfc;
