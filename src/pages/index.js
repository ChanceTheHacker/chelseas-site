import React from "react"

import Title from "../components/title/title"
import Invert from "../components/title/invert"
import Contact from "../components/contact/contact"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ParallaxContent from "../components/parallaxContent/parallaxContent"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <ParallaxContent>
        <Title />
        <Invert />
        <Contact />
      </ParallaxContent>
    </Layout>
  )
}

export default IndexPage
