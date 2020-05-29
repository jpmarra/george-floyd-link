import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  h1Header,
  h2Header,
  h3Header,
  h4Header,
  below,
} from "../styles/utilities"

const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .hero {
    ${h1Header};

    ${below.sm`
      ${h2Header};
    `}
  }

  .sub-hero {
    ${h3Header};

    ${below.sm`
      ${h4Header};
    `}
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageWrapper>
      <h1 className="hero">Oops!</h1>
      <p className="sub-hero">This page doesn't exist ...yet</p>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
