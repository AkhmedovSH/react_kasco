import React from "react";
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from "../sidebar/Sidebar";

import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout() {
	const location = useLocation();

	return (
		<>
			{/* d-flex flex-column min-vh-100 */}
		
					<Outlet />
				
		</>
	)
}

export default Layout