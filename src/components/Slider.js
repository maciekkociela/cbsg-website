import React from 'react'

function createMarkup(html) {
  return { __html: html }
}

function Slider(props) {
  const { html } = props
  return <span className={html} dangerouslySetInnerHTML={createMarkup(html)} />
}

export default Slider