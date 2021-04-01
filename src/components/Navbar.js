import { AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'
import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar(){
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                    <Typography variant="h5" className="head-text">
                        Live Cricket Scoreboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;