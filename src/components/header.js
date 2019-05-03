import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Headroom from "react-headroom"
import Container from "../layouts/container"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <Headroom style={{zIndex:2}}>
    <header className={styles.header}>
      <Container>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Container>
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
