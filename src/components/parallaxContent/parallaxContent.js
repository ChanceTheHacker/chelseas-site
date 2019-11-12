import React, { useRef, useState } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

export const ParallaxContent = ({ children }) => {
  const [Title, Invert, Contact] = children
  const parallaxRef = useRef()
  const [scrollMultiplier, setScrollMultiplier] = useState(0.5)

  //if the user scrolls using a mouse wheel, this makes the scroll faster
  const detectWheel = () => {
    setScrollMultiplier(1)
  }

  return (
    <div onWheel={detectWheel}>
      <Parallax ref={parallaxRef} pages={3}>
        <ParallaxLayer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          offset={0}
          speed={0.5 * scrollMultiplier}
        >
          {Title}
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          offset={0}
          speed={1.3 * scrollMultiplier}
        >
          {Invert}
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          offset={1}
          speed={2 * scrollMultiplier}
        >
          {Contact}
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParallaxContent
