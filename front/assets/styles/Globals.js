import React from "react";
import { css, Global } from "@emotion/react";

const Globals = () => {
  return (
    <Global
      styles={css`
        html {
          overflow-x: hidden;
          display: block;
          font-size: 62.5% !important;
          box-sizing: border-box;
          * {
            box-sizing: inherit;
          }
        }
        ul,
        dl {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        body {
          margin: 0;
          padding: 0;
          
          a {
            text-decoration: none;
            color: inherit;
          }
          /*******************************************************************
font
********************************************************************/
          font-family: Roboto, AppleSDGothicNeo-Regular, NotoSansKR, "Noto+Sans",
            "Malgun Gothic", "맑은 고딕", sans-serif;
          font-size: 1.8rem;
          line-height: 1.5;
          letter-spacing: -0.08rem;
          * {
            font-family: inherit;
            line-height: inherit;
            letter-spacing: inherit;
          }
          @font-face {
            font-family: "NotoSansKR";
            src: url(/font/NotoSansCJKkr-DemiLight.woff2) format("woff2"),
              url(/font/NotoSansCJKkr-DemiLight.woff) format("woff"),
              url(/font/NotoSansCJKkr-DemiLight.otf) format("opentype");
            font-weight: 400;
          }
          @font-face {
            font-family: "NotoSansKR";
            src: url(/font/NotoSansCJKkr-Medium.woff2) format("woff2"),
              url(/font/NotoSansCJKkr-Medium.woff) format("woff"),
              url(/font/NotoSansCJKkr-Medium.otf) format("opentype");
            font-weight: 600;
          }
          @font-face {
            font-family: "NotoSansKR";
            src: url(/font/NotoSansCJKkr-Bold.woff2) format("woff2"),
              url(/font/NotoSansCJKkr-Bold.woff) format("woff"),
              url(/font/NotoSansCJKkr-Bold.otf) format("opentype");
            font-weight: 700;
          }
          @font-face {
            font-family: "Roboto";
            src: url(/font/Roboto-Regular.woff2) format("woff2"),
              url(/font/Roboto-Regular.woff) format("woff"),
              url(/font/Roboto-Regular.eot) format("embedded-opentype");
            font-weight: 400;
          }
          @font-face {
            font-family: "Roboto";
            src: url(/font/Roboto-Bold.woff2) format("woff2"),
              url(/font/Roboto-Bold.woff) format("woff"),
              url(/font/Roboto-Bold.eot) format("embedded-opentype");
            font-weight: 600;
          }

          /*******************************************************************
          Custom Style
          ********************************************************************/

          .sr-only {
            position: absolute !important;
            overflow: hidden;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0 !important;
            border: 0;
            clip: rect(0,0,0,0;
          }
        }
      `}
    />
  );
};

export default Globals;
