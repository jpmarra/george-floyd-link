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
    margin-top: 10px;
    margin-bottom: 20px;
    ${below.sm`
      ${h4Header};
          margin-top: 10px;
         margin-bottom: 20px;
    `}
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
        label="Official George Floyd Memorial Fund"
        link="https://www.gofundme.com/f/georgefloyd"
      >
        Official Memorial Fund
      </ShareLink>
      <ShareLink
        label="Minnesota Freedom Fund"
        link="https://minnesotafreedomfund.org/donate"
      >
        Minnesota Freedom Fund
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
    </SplashWrapper>
  )
}
