import React, { useState, useEffect } from 'react';
import './App.css';
import { getContentfulSiteInfo } from './queries/index';
import HomePage from './Components/HomePage'



function App() {

  let [data, setData] = useState({});

  const getData = async () => {
    const siteData = await getContentfulSiteInfo();
    return setData(siteData);
  }

  useEffect(() => {
    getData();
  }, [])

  // console.log("siteInfo", data);
  if (data.fields) {
    return (
      <div>
        <HomePage siteInfo={data.fields} />
        
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
