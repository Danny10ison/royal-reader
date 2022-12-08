import { AppBar, styled, Toolbar, Typography, Box, InputBase, Menu, MenuItem } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import React from 'react';
import Badge from '@mui/material/Badge';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const SearchBar = styled("div")(({theme}) => ({
	backgroundColor: "white",
	padding:"0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "56%"
}));

const IconContainer = styled(Box)(({theme}) => ({
	display:"flex",
	gap: "20px",
	alignItems: "center"
}));


const TopNavigBar = () => {

	const [open, setOpen] = useState(false)

	return (
		<AppBar position='sticky'>   
			<StyledToolbar>
				<Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
						Royal Reader
				</Typography>
				<LocalLibraryIcon sx={{display:{xs:"block", sm:"none"}}}/>
				<SearchBar><InputBase placeholder='Search...'/></SearchBar>
				<IconContainer onClick = {e=>setOpen(true)}>
					<Badge color="primary">
						<TranslateIcon  />
					</Badge>
				</IconContainer>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				open = {open}
				aria-labelledby="demo-positioned-button"
				onClick = {e=>setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem >FR</MenuItem>
				<MenuItem >EN</MenuItem>
			</Menu>  
		</AppBar>
	)
}

export default TopNavigBar