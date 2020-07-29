import React, { useState, useEffect } from 'react';
import './App.css';
// import Layout from './Layout';
// import RichText from './Components/RichText';
import { getContentfulSiteInfo } from './queries/index';
import HomePage from './Components/HomePage'
import Footer from './Components/Footer';
// import * as headings from './styles/type';
// import { MainBtn, FlexCenter, ProfileImage } from './styles/layout';


function App() {

  let [data, setData] = useState({});

  const getData = async () => {
    const siteData = await getContentfulSiteInfo();
    return setData(siteData);
  }

  useEffect(() => {
    getData();
  }, [])

  console.log("siteInfo", data);
  if (data.fields) {
    return (
      <div>
        <HomePage siteInfo={data.fields} />
        <Footer siteInfo={data.fields}/>
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
