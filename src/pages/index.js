import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import ScrollAnimation from "react-animate-on-scroll"

import Layout from "../components/layout"
import StringToHtml from "../components/StringToHtml"
import Slider from "../components/Slider"

import Section from '../layouts/section'

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
                <ScrollAnimation animateIn="fadeIn">
                  <ScrollAnimation animateIn="slideInUp">
                    <h1>CBSG</h1>
                  </ScrollAnimation>
                </ScrollAnimation>
                    
              </Section>

              {data.allWordpressWpNews.edges.map(edge => (
                <Link key={edge.id} to={"/" + edge.node.slug}>
                  <div style={{ height: 200 }} />
                  <ScrollAnimation animateIn="fadeIn">
                    <ScrollAnimation animateIn="slideInUp">
                      <h2>
                        <StringToHtml html={edge.node.title} />
                      </h2>
                    </ScrollAnimation>
                  </ScrollAnimation>
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
