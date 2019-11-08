import React, { useState } from "react"
import { Link } from "gatsby"
import { animated, useSpring, config } from "react-spring"

import Chelsea from "../images/svg/chelsea/chelsea"
import Layout from "../components/layout"
import Style from "./index.module.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const invertAnim = useSpring({
    from: { transform: "translate(-50%, -50%)" },
    to: { transform: "translate(-40%, -5%)" },
    config: config.stiff,
  })
  const { percent } = useSpring({ to: { percent: 0 }, from: { percent: 1 } })
  const AnimatedName = animated(Chelsea)

  return (
    <Layout>
      <SEO title="Home" />
      <div className={Style.chelseaDiv}>
        <AnimatedName percent={percent.interpolate(percent => percent)} />
      </div>
      <animated.div className={Style.invert} style={invertAnim}>
        {" "}
      </animated.div>
    </Layout>
  )
}

export default IndexPage
