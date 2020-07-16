import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import { getContentfulNav } from './queries/index';
import HomePageSections from './Components/HomePageSections'
import * as headings from './styles/type';
import { MainBtn } from './styles/layout';
import { FlexCenter } from './styles/layout';

function App() {

  let [data, setData] = useState({});

  const getData = async () => {
    const navData = await getContentfulNav();
    return setData(navData);
  }

  useEffect(() => {
    getData();
  }, [])

  if (data.fields) {
    return(
      <div>
      <Layout bg={`url(${data.fields.bannerImage.fields.file.url})`}>
          <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne>
          <div>
            <headings.HeaderTwo larger>{data.fields.websiteSubtitle}</headings.HeaderTwo>
          </div>
          <FlexCenter>
          <a href={`mailto:{data.fields.email}`}><MainBtn>Get in touch</MainBtn></a>
          </FlexCenter>
        </Layout>
        <Layout bg="#fff">
          <HomePageSections />
        </Layout>
        <Layout bg="#293241">
          <footer>
            <div>
              <a href={`mailto:{data.fields.email}`}>Email Me</a>
            </div>
            <div>
            <a target="_blank"rel="noopener noreferrer" href={data.fields.gitHub}>GitHub</a> | <a target="_blank"rel="noopener noreferrer" href={data.fields.linkedIn}>LinkedIn</a> | <a target="_blank"rel="noopener noreferrer" href={data.fields.medium}>Medium</a>
            </div>
          </footer>
        </Layout>
        </div>
    )
  }

  return(
    <div>
      ...loading
    </div>
  )

}

export default App;
