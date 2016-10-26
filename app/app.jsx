import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//Pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import User from './pages/User';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Splash}></IndexRoute>
			<Route path='user' component={User}></Route>
		</Route>
	</Router>,
document.getElementById('app'));
