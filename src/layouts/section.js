/**
 * Section layout component
 */

import React from "react"
import PropTypes from "prop-types"
import styles from "./section.module.scss"
import Container from "./container"

function Section ({ children, className }) { 
  if(className === "large") {
    className = styles.sectionLarge;
  } else if(className === "small") {
    className = styles.sectionSmall;
  } else {
    className = styles.section;
  } 
  return (
      <section className={className}>
        <Container>
            {children}
        </Container>
      </section>
  )}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Section
