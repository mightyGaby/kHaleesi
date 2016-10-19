import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//Pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserContact from './pages/UserContact';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Login}></IndexRoute>
			<Route path='signup' component={Signup}></Route>
			<Route path='contact' component={UserContact}></Route>
		</Route>
	</Router>,
document.getElementById('app'));