/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Theme Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim, Cainan Barboza and Micah Peterson

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.1.0";
import "./assets/demo/demo.css";

import Index from "./views/Index.js";
import LandingPage from "./views/examples/LandingPage.js";
import RegisterPage from "./views/examples/RegisterPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";
import EditProfile from "./views/examples/EditProfile.js";
import PublicProfile from './views/examples/PublicProfile'
import CreateProfile from "./views/examples/CreateProfile.js";
import Posts from "./views/examples/Posts.js";

import {Provider} from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/edit-profile"
        render={props => <EditProfile {...props} />}
      />
      <Route

        path="/create-profile"
        render={props => <CreateProfile {...props} />}

      />
      <Route

        path="/publicprofile/:id"
        render={props => <PublicProfile {...props} />}

      />
      
      <Route 

        path="/posts"
        render={props => <Posts {...props} />}
        
      />
      <Redirect from="/" to="/landing-page" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

