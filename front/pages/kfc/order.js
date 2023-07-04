import React from 'react';
import TopGnb from 'components/kfc/TopGnb';
import Img from 'next/image';
import Logo from 'assets/images/common/logo_kfc.png';
import Wrap from 'components/kfc/Wrap';
import { css } from '@emotion/react';
import NavTab from 'components/kfc/NavTab';

const order = () => {
  return (
    <Wrap>
      <div css={orderStyle}>
        <section>
          <h2 className="sr-only">메뉴선택하기</h2>
          <header>
            <div>
              <Img src={Logo} alt="Logo" />
            </div>
            <TopGnb />
          </header>
          <NavTab />
          <section>
            <h3 className="sr-only">메뉴목록</h3>
            <div>
              <div>
                <div>닭껍질튀김버켓</div>
                <div>
                  <img src="/images/sample.png" alt="sample" />
                </div>
                <div>9900</div>
                <div>닭껍질튀김+텐더5+살사소스</div>
                <div>매장 상황에 따라 조기 소진될 수 있습니다.</div>
              </div>
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
          레이어팝업
          <h2>상품 구성을 선택해 주세요</h2>
          단품, 세트, 박스 선택하면 V표시 다음
        </div>
        <div>상품명</div>
      </div>
    </Wrap>
  );
};

const orderStyle = css`
  padding: 2rem;
  background-color: #fff;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default order;
