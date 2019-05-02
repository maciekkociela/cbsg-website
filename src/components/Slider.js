import React from 'react'
import { Fade } from 'react-slideshow-image';
import StringToHtml from '../components/StringToHtml'
import BackgroundImage from 'gatsby-background-image'

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
                <div className={styles.eachFade}>
                  
                  
                    <BackgroundImage Tag="section"
                           className="className"
                           fluid={slide.node.featured_media.localFile.childImageSharp.sizes}
                           backgroundColor={`#040e18`}
                    >   
                        <div className={styles.slide}>
                            <h1><StringToHtml html={slide.node.title} /></h1>
                        </div>
                    </BackgroundImage>
                  
                </div>
        )}
      </Fade>
      
    )
  }

export default Slider
