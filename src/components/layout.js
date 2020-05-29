/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Black } from "../styles/utilities"

const LayoutWrapper = styled.div`
  background: ${Black};
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  margin: 5px;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <main style={{ width: "100%", height: "100%" }}>{children}</main>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
