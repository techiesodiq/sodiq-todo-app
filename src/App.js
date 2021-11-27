/** @format */

import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";

function App() {
	return (
		<>
			<BrowserRouter>
				<ToastContainer />
				<NavBar />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
