import React, { useState } from "react"
import { Link } from "gatsby"
import { animated, useSpring, config } from "react-spring"

import Chelsea from "../images/svg/chelsea/chelsea"
import Layout from "../components/layout"
import Style from "./index.module.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const AnimatedName = animated(Chelsea)

  const invertAnim = useSpring({
    from: { transform: "translate(-50%, -50%)" },
    to: { transform: "translate(-40%, -5%)" },
    config: config.stiff,
    delay: 1000,
  })

  const invertOpacityAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
  })

  const { percent } = useSpring({
    to: { percent: 0 },
    from: { percent: 1 },
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className={Style.chelseaDiv}>
        <AnimatedName percent={percent.interpolate(percent => percent)} />
        <div className={Style.outline}> </div>
        <animated.div
          className={Style.outlineHideX}
          style={{
            transform: percent.interpolate(
              percent =>
                `translate(calc(-10% + 2px), calc(-100% + 1px)) scaleX(${percent})`
            ),
          }}
        ></animated.div>
        <animated.div
          className={Style.outlineHideY}
          style={{
            transform: percent.interpolate(
              percent =>
                `translate(calc(-10% - 1px), calc(-100% - 1px)) scaleY(${percent})`
            ),
          }}
        ></animated.div>
      </div>
      <animated.div style={invertOpacityAnim}>
        <animated.div
          className={Style.invert}
          style={invertAnim}
        ></animated.div>
      </animated.div>
    </Layout>
  )
}

export default IndexPage
