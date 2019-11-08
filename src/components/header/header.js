import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ChelseaIcon from "../../images/svg/chelseaIcon/chelseaIcon"
import Style from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={Style.header}>
    <div>
      <ChelseaIcon size="30" />
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
