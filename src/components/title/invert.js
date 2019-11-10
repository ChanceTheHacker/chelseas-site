import React from "react"
import { animated, useSpring } from "react-spring"

import style from "./title.module.scss"

export const Invert = () => {
  const invertAnim = useSpring({
    from: { transform: "translate(-50%, -50%)" },
    to: { transform: "translate(-40%, -5%)" },
    delay: 1000,
  })

  const invertOpacityAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
  })

  return (
    <>
      <animated.div style={invertOpacityAnim}>
        <animated.div
          className={style.invert}
          style={invertAnim}
        ></animated.div>
      </animated.div>
    </>
  )
}

export default Invert
