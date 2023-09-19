import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from '../App';
import ShowProject from '../Components/ShowProject';

class UserRouter extends React.Component {
	state = {};
	render() {
		return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="ShowProject/:id" component={ShowProject} />
                    </Switch>
                </BrowserRouter>
            </div>
		);
	}
}

export default UserRouter;
