import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from '../App';
import ShowProject from '../Components/ShowProject';
import Footer from './Components/Footer';

class UserRouter extends React.Component {
        
	render() {

        let [data, setData] = useState({});
      
        const getData = async () => {
          const siteData = await getContentfulSiteInfo();
          return setData(siteData);
        }
      
        useEffect(() => {
          getData();
        }, [])

		return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/ShowProject/:id" component={ShowProject} />
                    </Switch>
                </BrowserRouter>
                <Footer siteInfo={data.fields}/>
            </div>
		);
	}
}

export default UserRouter;