import React from 'react'
import { Navigate } from 'react-router-dom';

import Login from '../pages/login/Login'
import Settings from '../pages/settings/Settings'

import Shipment_0850 from '../pages/kas-0850/kas-0850'

import Kas0801 from '../pages/kas-0801/kas-0801'
import Kas0851 from '../pages/kas-0851/kas-0851'
import Kas0852 from '../pages/kas-0852/kas-0852'
import Kas0853 from '../pages/kas-0853/kas-0853'
import Kas0854 from '../pages/kas-0854/kas-0854'
import Kas0855 from '../pages/kas-0855/kas-0855'
import Kas0858 from '../pages/kas-0858/kas-0858'

const publicRoutes = [
	{ path: "*", component: () => <Navigate to="/" /> },
]

const privateRoutes = [
	{ path: "/", component: <Login /> },

	{ path: "/kas-0000", component: <Shipment_0850 /> },
	{ path: "/kas-0850", component: <Shipment_0850 /> },
	{ path: "/kas-0801", component: <Kas0801 /> },
	{ path: "/kas-0851", component: <Kas0851 /> },
	{ path: "/kas-0852", component: <Kas0852 /> },
	{ path: "/kas-0853", component: <Kas0853 /> },
	{ path: "/kas-0854", component: <Kas0854 /> },
	{ path: "/kas-0855", component: <Kas0855 /> },
	{ path: "/kas-0858", component: <Kas0858 /> },

	{ path: "/settings", component: <Settings /> },
	
	{ path: "*", component: () => <Navigate to="/" /> },
]

export { publicRoutes, privateRoutes }