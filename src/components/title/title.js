import React from "react"
import { animated, useSpring } from "react-spring"

import Chelsea from "../../images/svg/chelsea/chelsea"
import style from "./title.module.scss"

export const Title = () => {
  const AnimatedName = animated(Chelsea)

  const { percent } = useSpring({
    from: { percent: 1 },
    to: { percent: 0 },
  })

  return (
    <>
      <div className={style.chelseaDiv}>
        <AnimatedName percent={percent.interpolate(percent => percent)} />
        <div className={style.outline}> </div>
        <animated.div
          className={style.outlineHideX}
          style={{
            transform: percent.interpolate(
              percent =>
                `translate(calc(-10% + 2px), calc(-100% + 1px)) scaleX(${percent})`
            ),
          }}
        ></animated.div>
        <animated.div
          className={style.outlineHideY}
          style={{
            transform: percent.interpolate(
              percent =>
                `translate(calc(-10% - 1px), calc(-100% - 1px)) scaleY(${percent})`
            ),
          }}
        ></animated.div>
      </div>
    </>
  )
}

export default Title
