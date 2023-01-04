import React from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './pages'

import Layout from '../containers/layout/Layout';


function createPublicRoutes() {
	return publicRoutes.map((item, key) => {
		return (
			<Route key={key} path={item.path} element={item.component} />
		);
	});
}

function createPrivateRoutes() {
	return privateRoutes.map((item, key) => {
		return (
			<Route key={key} element={<ProtectedRoute />}>
				<Route path={item.path} element={item.component} />
			</Route>
		);
	});
}

const ProtectedRoute = () => {
	//const isAuthenticated = localStorage.getItem("isConnected") === 'YES' ? true : false;
	const isAuthenticated = true;
	if (!isAuthenticated) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
};

const Index = () => {
	return (
		<Routes>
			{createPublicRoutes()}
			<Route path="/" element={<Layout />}>
				{createPrivateRoutes()}
			</Route>
		</Routes>
	)
}

export default Index;