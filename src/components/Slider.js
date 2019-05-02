import React from 'react'
import { Fade } from 'react-slideshow-image';
import BackgroundImage from 'gatsby-background-image'

import Container from '../layouts/container'

import StringToHtml from '../components/StringToHtml'

import styles from './Slider.module.scss'
  
  const fadeProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: false
  }

const Slider = (props) => {
    return (
      <Fade {...fadeProperties}>
        {props.slides.map( (slide) =>
                <div key={slide.toString()} className={styles.eachFade}>
                    <BackgroundImage Tag="section"
                           fluid={slide.node.featured_media.localFile.childImageSharp.fluid}
                           backgroundColor={`#040e18`}
                    >   
                        <div className={styles.slide}>
                            <Container>
                                <h1><StringToHtml html={slide.node.title} /></h1>
                                <button><StringToHtml html={slide.node.acf.button} /></button>
                            </Container>
                        </div>
                    </BackgroundImage>
                  
                </div>
        )}
      </Fade>
      
    )
  }

export default Slider
