import React, { useState } from "react";
import { PiListBold } from "react-icons/pi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = anchorEl;
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<header className="header">
				<div className="container d-flex justify-content-between align-items-center">
					<div className="title d-flex align-items-center">
						<h3>陳姿卉</h3>
						<p>／前端工程師</p>
					</div>
					<div className="d-flex d-md-none">
						<Button
							id="fade-button"
							aria-controls={open ? "fade-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}>
							<PiListBold size={24} color="white" />
						</Button>
						<Menu
							id="fade-menu"
							MenuListProps={{
								"aria-labelledby": "fade-button",
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							TransitionComponent={Fade}>
							<MenuItem onClick={handleClose}>Home</MenuItem>
							<MenuItem onClick={handleClose}>Blog</MenuItem>
							<MenuItem onClick={handleClose}>Project</MenuItem>
						</Menu>
					</div>
					<nav className="d-flex gap-3 d-none d-md-flex">
						<div>
							<a href="/" className="link">
								Home
							</a>
						</div>
						<div>
							<a href="/blog" className="link">
								Blog
							</a>
						</div>
						<div>
							<a href="/project" className="link">
								Project
							</a>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
