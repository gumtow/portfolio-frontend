import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import RichText from './Components/RichText';
import { getContentfulNav } from './queries/index';
import HomePageSections from './Components/HomePageSections'
import * as headings from './styles/type';
import { MainBtn, FlexCenter, ProfileImage } from './styles/layout';


function App() {

  let [data, setData] = useState({});

  const getData = async () => {
    const navData = await getContentfulNav();
    return setData(navData);
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(data);
  if (data.fields) {
    return (
      <div>
        <Layout bg={`url(${data.fields.bannerImage.fields.file.url})`}>
          <div>
            <FlexCenter>
              <ProfileImage src={data.fields.profileImage.fields.file.url} alt={data.fields.profileImage.fields.title} />
            </FlexCenter>
            <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne>
            <headings.HeaderTwo larger>{data.fields.websiteSubtitle}</headings.HeaderTwo>
            <headings.HeaderThree>
              <RichText content={data.fields.teaserText} />
            </headings.HeaderThree>
            <FlexCenter>
              <a href={`mailto:{data.fields.email}`}><MainBtn>Get in touch</MainBtn></a>
            </FlexCenter>
            <FlexCenter>
              <headings.InfoLinks>
                <a target="_blank" rel="noopener noreferrer" href={data.fields.gitHub}>GitHub</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.linkedIn}>LinkedIn</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.medium}>Medium</a>
              </headings.InfoLinks>
            </FlexCenter>
          </div>
        </Layout>
        <Layout bg="#fff">
          <HomePageSections />
        </Layout>
        <Layout bg="#293241">
          <footer>
          <FlexCenter>
              <a href={`mailto:{data.fields.email}`}><MainBtn>Get in touch</MainBtn></a>
            </FlexCenter>
            <FlexCenter>
              <headings.InfoLinks>
                <a target="_blank" rel="noopener noreferrer" href={data.fields.gitHub}>GitHub</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.linkedIn}>LinkedIn</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.medium}>Medium</a>
              </headings.InfoLinks>
            </FlexCenter>
          </footer>
        </Layout>
      </div>
    )
  }

  return (
    <div>
      ...loading
    </div>
  )

}

export default App;
