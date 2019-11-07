import React, { useState } from "react"
import { Link } from "gatsby"
import { Spring, config } from "react-spring/renderprops"

import Cth from "../images/cth2"
import Layout from "../components/layout"
import Style from "./index.module.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button onClick={() => setOpen(!isOpen)}>Click</button>
      <Spring
        from={{ fill: "transparent", stroke: "black", x: 1 }}
        to={{ fill: "transparent", stroke: "black", x: 0 }}
        config={config.molasses}
      >
        {props => (
          <div className={Style.cthDiv} strokeDashoffset={props.x}>
            <Cth
              className={Style.cth}
              fillColor={props.fill}
              strokeColor={props.stroke}
              percent={props.x}
            />
          </div>
        )}
      </Spring>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
