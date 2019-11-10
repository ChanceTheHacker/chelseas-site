import React, { useRef } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

export const ParallaxContent = ({ children }) => {
  const [Title, Invert] = children
  const parallaxRef = useRef()
  return (
    <>
      <Parallax ref={parallaxRef} pages={3}>
        <ParallaxLayer offset={0} speed={0.5}>
          {Title}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.3}>
          {Invert}
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default ParallaxContent
