import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import App from '../App';
import ShowProject from '../Components/ShowProject';

class UserRouter extends React.Component {
	state = {};
	render() {
		return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={App} />
                    <Route path="/ShowProject" component={ShowProject} />
                </BrowserRouter>
            </div>
		);
	}
}

export default UserRouter;