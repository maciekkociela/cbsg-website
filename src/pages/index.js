import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Animation from "../components/Animate"

import Layout from "../components/layout"
import StringToHtml from "../components/StringToHtml"
import Slider from "../components/Slider"

import Section from "../layouts/section"

import BackgroundImage from "gatsby-background-image"

import { Row, Col } from "react-flexbox-grid"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <StaticQuery
          query={graphql`
            query allIndexData {
              allWordpressPost {
                edges {
                  node {
                    title
                    slug
                    content
                    excerpt
                  }
                }
              }
              allWordpressPage {
                edges {
                  node {
                    title
                    slug
                    content
                    excerpt
                  }
                }
              }
              allWordpressWpNews {
                edges {
                  node {
                    title
                    slug
                  }
                }
              }
              allWordpressWpSlider {
                edges {
                  node {
                    title
                    content
                    featured_media {
                      localFile {
                        childImageSharp {
                          fluid(quality: 90, maxWidth: 4160) {
                            srcSet
                            aspectRatio
                            src
                            sizes
                          }
                          fixed(width: 125, height: 125) {
                            srcSet
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                    acf {
                      button
                      button_link
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <div className="index-page">
              <Slider slides={data.allWordpressWpSlider.edges} />

              <Section>
                <Animation>
                  <h1>CBSG</h1>
                </Animation>
                <Row>
                  <Col xs={6} md={6}>
                    <Animation>
                      <h4>
                        Celem działalności CBSG Polska jest popularyzacja
                        certyfikacji zawodowych Microsoft.
                      </h4>
                    </Animation>
                    <Animation>
                      <h6>Stawiamy małe kroki w wielkim świecie IT.</h6>
                    </Animation>
                  </Col>
                  <Col xs={6} md={6}>
                    <Animation>
                      <p>
                        Proponując pełen wachlarz dostępnych form edukacji
                        zapewniamy kompleksowe przygotowanie do egzaminów oraz
                        możliwość systematycznego poszerzania wiedzy
                        teoretycznej i praktycznej. Równocześnie – bazując na
                        naszych doświadczeniach i kompetencjach – jesteśmy
                        gotowi do wsparcia zespołów IT w bieżących zadaniach
                        oraz nowych projektach.
                      </p>
                    </Animation>
                    <Animation>
                      <button>Więcej</button>
                    </Animation>
                  </Col>
                </Row>
              </Section>

              <BackgroundImage
                Tag="div"
                fluid={
                  data.allWordpressWpSlider.edges[1].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              ś>
                <Section>
                  <Animation>
                    <h1>CBSG</h1>
                  </Animation>
                  <Row>
                    <Col xs={6} md={6}>
                      <Animation>
                        <h4>
                          Celem działalności CBSG Polska jest popularyzacja
                          certyfikacji zawodowych Microsoft.
                        </h4>
                      </Animation>
                      <Animation>
                        <h6>Stawiamy małe kroki w wielkim świecie IT.</h6>
                      </Animation>
                    </Col>
                    <Col xs={6} md={6}>
                      <Animation>
                        <p>
                          Proponując pełen wachlarz dostępnych form edukacji
                          zapewniamy kompleksowe przygotowanie do egzaminów oraz
                          możliwość systematycznego poszerzania wiedzy
                          teoretycznej i praktycznej. Równocześnie – bazując na
                          naszych doświadczeniach i kompetencjach – jesteśmy
                          gotowi do wsparcia zespołów IT w bieżących zadaniach
                          oraz nowych projektach.
                        </p>
                      </Animation>
                      <Animation>
                        <button>Więcej</button>
                      </Animation>
                    </Col>
                  </Row>
                </Section>
              </BackgroundImage>

              {data.allWordpressWpNews.edges.map(edge => (
                <Link key={edge.id} to={"/" + edge.node.slug}>
                  <div style={{ height: 200 }} />
                  <Animation>
                    <h2>
                      <StringToHtml html={edge.node.title} />
                    </h2>
                  </Animation>
                </Link>
              ))}

              <div className="index-page-post">
                <div>
                  <h2>
                    <StringToHtml
                      html={data.allWordpressPost.edges[0].node.title}
                    />
                  </h2>
                  <StringToHtml
                    html={data.allWordpressPost.edges[0].node.excerpt}
                  />

                  <Link
                    to={"/post/" + data.allWordpressPost.edges[0].node.slug}
                  >
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
              <div
                className="index-page-post"
                to={"/post/" + data.allWordpressPost.edges[1].node.slug}
              >
                <div>
                  <h2>
                    <StringToHtml
                      html={data.allWordpressPost.edges[1].node.title}
                    />
                  </h2>
                  <StringToHtml
                    html={data.allWordpressPost.edges[1].node.excerpt}
                  />
                  <Link
                    to={"/post/" + data.allWordpressPost.edges[1].node.slug}
                  >
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
              <div
                className="index-page-post"
                to={"/post/" + data.allWordpressPost.edges[2].node.slug}
              >
                <div>
                  <h2>{data.allWordpressPost.edges[2].node.title}</h2>
                  <p>{data.allWordpressPost.edges[2].node.excerpt}</p>
                  <Link
                    to={"/post/" + data.allWordpressPost.edges[2].node.slug}
                  >
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        />
      </Layout>
    )
  }
}

export default IndexPage
