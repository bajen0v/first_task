import React, {useState} from "react"
import { Box, Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"

export const Dashboard = ({onClick}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		onClick(true);
	};

	return (
		<Box>
			<Button variant="contained" onClick={handleClick}>Click me</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleClose}>
				<ListItemIcon>
					Icon
          		</ListItemIcon>
				<ListItemText>Create a job</ListItemText>
				</MenuItem>
			</Menu>
		</Box>
	);
}
