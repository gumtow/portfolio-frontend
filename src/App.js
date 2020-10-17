import React, { useState, useEffect } from 'react';
import './App.css';
// import Layout from './Layout';
// import RichText from './Components/RichText';
import { getContentfulSiteInfo } from './queries/index';
import HomePage from './Components/Home'
// import Footer from './Components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowProject from './Components/ShowProject';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import * as headings from './styles/type';
// import { MainBtn, FlexCenter, ProfileImage } from './styles/layout';

library.add(fab, faCheckSquare, faCoffee)

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <HomePage siteInfo={data.fields} />} />
            <Route exact path="/ShowProject/:id" component={ShowProject} />
          </Switch>
          {/* <Footer siteInfo={data.fields} /> */}
        </BrowserRouter>

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
