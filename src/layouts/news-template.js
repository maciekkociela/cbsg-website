import React, { Component } from 'react'
import parse from 'html-react-parser'

import Layout from '../components/layout'
import Container from './container'
import StringToHtml from '../components/StringToHtml'
// import { colors } from '../variables';

class PostPage extends Component {
  render () {
    const postData = this.props.pageContext.allPostData;
    return (
        <Layout>
          <Container>
            <h1>{parse(postData.title)}</h1>
            <StringToHtml html={postData.acf.news_content} />  
          </Container> 
        </Layout>
    )
  }
}

export default PostPage