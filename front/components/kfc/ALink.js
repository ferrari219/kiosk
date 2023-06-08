import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import theme from "assets/styles/theme";
import { css } from "@emotion/react";

const ALink = ({ children, lnk }) => {
  return (
    <Link href={lnk} css={ALinkStyle}>
      {children}
    </Link>
  );
};
ALink.proptypes = {
  children: PropTypes.node.isRequired,
  lnk: PropTypes.string.isRequired,
};
const ALinkStyle = css`
  padding: 1rem 5rem;
  font-size: ${theme.size.lg};
  font-weight: 600;
  background-color: ${theme.color.main};
  color: white;
  border-radius: 3rem;
`;

export default ALink;
