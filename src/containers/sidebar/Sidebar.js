import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";


import { GiHamburgerMenu } from "react-icons/gi";
import { BsBrush, BsPerson, BsFilePost } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";
import { AiFillAppstore } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { MdCategory, MdWaterfallChart } from "react-icons/md";

function Sidebar() {
	let location = useLocation();
	const navigate = useNavigate();
	const [showSidebar, setShowSidebar] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [menu, setMenu] = useState([
		{
			name: "Total",
			icon: <MdWaterfallChart />,
			path: "/total",
			show: false,
			children: [],
		},
		{
			name: "Users",
			icon: <BsPerson />,
			path: "/users",
			show: false,
			children: [],
		},
		{
			name: "New and Discount items",
			icon: <AiFillAppstore />,
			path: "/new-and-discount-items",
			show: false,
			children: [],
		},
		{
			name: "Catalogs and Items",
			icon: <MdCategory />,
			path: "/catalogs-and-items",
			show: false,
			children: [],
		},
		{
			name: "Activity post",
			icon: <BsFilePost />,
			path: "/activity-post",
			show: false,
			children: [],
		},
		{
			name: "Settings",
			icon: <VscSettingsGear />,
			path: "/settings",
			show: false,
			children: [],
		},
	]);

	const showItem = (index, bool, resetMenu = false) => {
		let copy = [...menu];
		if (resetMenu) {
			for (let i = 0; i < copy.length; i++) {
				copy[i].show = false;
			}
		}
		copy[index].show = bool;
		setMenu(copy);
	};

	function logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("isConnected");
		localStorage.removeItem("walletAAddress");
		navigate("/login");
	}

	useEffect(() => {
		for (let i = 0; i < menu.length; i++) {
			showItem(i, false, false);
			if (location.pathname.includes(menu[i].path)) {
				showItem(i, true, false);
			}
		}
	}, [location]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<div>
				<div>
					<div
						className="mobile_sidebar_close_btn"
						onClick={() => setShowSidebar(!showSidebar)}
					>
						<GiHamburgerMenu size={24} color={showSidebar ? "#fff" : "#000"} />
					</div>
				</div>
				<div
					className="sidebar sidebar-fixed"
					style={!showSidebar ? { marginLeft: "-100%" } : {}}
				>

					<div className="sidebar-email">Keng Makon</div>
					<div className="sidebar-nav">
						{menu.map((item, index) => {
							return (
								<React.Fragment key={item.name}>
									{item.children.length ? (
										<div
											className={
												"sidebar-nav-item cursor " +
												(item.show ? "sidebar-nav-active" : "")
											}
										>
											<div
												className="sidebar-nav-border d-flex justify-content-between align-items-center w-100"
												onClick={() => showItem(index, !item.show, true)}
											>
												<div className="d-flex justify-content-between align-items-center w-100">
													<div className="d-flex align-items-center">
														<div className="sidebar-nav-item-logo">
															{item.icon}
														</div>
														<span className="fz13">{item.name}</span>
													</div>
													<div style={{ marginRight: "30px" }}>
														<IoIosArrowDown />
													</div>
													{/* {item.children.length && item.show ? <ChevronDown color={'#7050A4'} size={16} /> : <ChevronRight size={16} />} */}
												</div>
											</div>
										</div>
									) : (
										// activeClassName='sidebar-nav-active'
										<div
											key={index}
											onClick={() => navigate(item.path)}
											className={
												"sidebar-nav-item " +
												(location.pathname === item.path ||
													location.pathname.includes(item.path)
													? "sidebar-nav-active"
													: "")
											}
										>
											<div className="sidebar-nav-border d-flex justify-content-between align-items-center ">
												<div className="d-flex align-items-center">
													<div className="sidebar-nav-item-logo">
														{item.icon}
													</div>
													<span className="fz13">{item.name}</span>
												</div>
											</div>
										</div>
									)}
									{/* {
                    item.children.length > 0 && item.show ?
                      <div className="sidebar-nav-children pb-1 pt-2">
                        {item.children.map((item2) => {
                          return (
                            <Link key={item2.name} to={item2.path}>
                              <div className={"d-flex justify-content-between align-items-center sidebar-nav-item mx-1 mb-1 " +
                                (location.pathname === item2.path || location.pathname.includes(item2.path) || location.pathname.includes(item2.path2) || location.pathname.includes(item2.path3) ?
                                  'sidebar-child-active'
                                  :
                                  'sidebar-child'
                                )} >
                                <div className="d-flex align-items-center">
                                  <span className="fz13">{item2.name}</span>
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                      : ''
                  } */}
								</React.Fragment>
							);
						})}
						<div
							className="sidebar-nav-item sidebar-logout cursor"
							onClick={() => setShowModal(true)}
						>
							<div className="d-flex align-items-center">
								<span className="fz13">Logout</span>
							</div>
							<div className="mr-20">
								<MdLogin color="#fff" size={24} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter main_modal"
				centered
				contentClassName="main_modal_body"
				dialogClassName="justify-content-center"
				show={showModal}
				onHide={() => setShowModal(false)}
			>
				<Modal.Body>
					<div className="d-flex flex-column align-items-center justify-content-center h-100">
						{/* <img src={Logout} alt="" className="mb-40" /> */}
						<div className="main_modal_text">Will you logout</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className="d-flex">
						<div className="w-50">
							<button
								className="main_modal_btn_001"
								onClick={() => setShowModal(false)}
							>
								No
							</button>
						</div>
						<div className="w-50">
							<button className="main_modal_btn_002" onClick={() => logout()}>
								Yes
							</button>
						</div>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Sidebar;
