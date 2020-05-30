import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import ShareLink from "./ShareLink"
import {
  h1Header,
  h2Header,
  h3Header,
  h4Header,
  below,
} from "../styles/utilities"

const SplashWrapper = styled(motion.section)`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .hero {
    ${h2Header};

    ${below.sm`
      font-size: 30px;
  `}
  }

  .sub-hero {
    ${h4Header};
    margin-top: 10px;
    margin-bottom: 20px;
    ${below.sm`
      margin: 0;
      margin-bottom: 5px;
  `}
  }

  .site-credit {
    position: absolute;
    width: 100%;
    text-align: center;
    color: #7d7d78;
    bottom: 0;
    font-size: 12px;
    ${below.sm`
      display: none;
  `}
    a {
      color: #7d7d78;
    }
  }
`

export const Splash = () => {
  return (
    <SplashWrapper
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", damping: 15 }}
    >
      <h1 className="hero">Justice for Big Floyd</h1>
      <h2 className="sub-hero">text "FLOYD" to 55156</h2>
      <ShareLink
        label="Black Visions Collective"
        link="https://www.blackvisionsmn.org/"
      >
        Black Visions Collective
      </ShareLink>
      <ShareLink
        label="Reclaim The Block"
        link="https://www.reclaimtheblock.org/home/#about"
      >
        Reclaim The Block
      </ShareLink>
      <ShareLink
        label="Official George Floyd Memorial Fund"
        link="https://www.gofundme.com/f/georgefloyd"
      >
        Official Memorial Fund
      </ShareLink>
      <ShareLink
        label="Nationwide Protest Bail Funds"
        link="https://www.dsa-la.org/support_floyd_protests_nationwide"
      >
        Nationwide Bail Funds
      </ShareLink>
      <ShareLink
        label="Justice For Big Floyd Calls"
        link="https://www.justiceforbigfloyd.com/make-calls"
      >
        Make Calls To Officials
      </ShareLink>
      <ShareLink
        label="Justice For Big Floyd Petition"
        link="https://www.justiceforbigfloyd.com/#petition"
      >
        Petition for Justice
      </ShareLink>
      <ShareLink
        label="North Star Health Collective"
        link="https://www.northstarhealthcollective.org//"
      >
        North Star Health Collective
      </ShareLink>
      <ShareLink
        label="UATL Arrest Resource"
        link="http://upagainstthelaw.org/jail-solidarity/"
      >
        If You're Arrested
      </ShareLink>
      <span className="site-credit">
        Site created by{" "}
        <a
          href="https://www.jpmarra.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          JP Marra
        </a>
      </span>
    </SplashWrapper>
  )
}
