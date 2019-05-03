import React from "react"

import ScrollAnimation from "react-animate-on-scroll"

const Animate = ({children}) => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <ScrollAnimation animateIn="slideInUp">
        {children}
      </ScrollAnimation>
    </ScrollAnimation>
  )
}

export default Animate
