import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Black, White, h4Header, Body1, below } from "../styles/utilities/"

const StyledLink = styled(motion.a)`
  text-decoration: none;
  width: 300px;
  height: 60px;
  margin: 5px 0;
  ${below.md`
      width: 80%;
    `}
  .button-wrap {
    padding: 3px;
    position: relative;
    background: linear-gradient(to right, #f743b6, #fcc043);
    border-radius: 5px;
  }

  .button-contents {
    background: ${Black};
    color: ${White};
    height: 100%;
    padding: 6px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${h4Header};
  }
`

const ShareLink = ({ children, link, label }) => (
  <StyledLink
    aria-label={label}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={link}
    className="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="button-wrap">
      <div className="button-contents">{children}</div>
    </div>
  </StyledLink>
)

export default ShareLink
