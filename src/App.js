import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import { getContentfulNav } from './queries/index';
import HomePageSections from './Components/HomePageSections'
import * as headings from './styles/type';

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
    return(
      <Layout>
        <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne>
        <div>
          <headings.HeaderTwo bg={data.fields.bannerImage.fields.file.url}>{data.fields.websiteSubtitle}</headings.HeaderTwo>
          {/* <img src ={data.fields.bannerImage.fields.file.url} alt={data.fields.bannerImage.fields.title}/> */}
        </div>
        <HomePageSections />
      </Layout>
    )
  }

  return(
    <div>
      ...loading
    </div>
  )

}

export default App;
