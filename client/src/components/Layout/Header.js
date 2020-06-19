import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreVert from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import { logoutUser } from '../../actions/authActions'
import { logoutCooker } from '../../actions/authcookerActions'

const styles = {
    root: {
        flexGrow: 1
    },
    logo: {
        color: '#fff',
        fontSize: 30,
        textTransform: 'uppercase'
    },
    space: {
        justifyContent: 'space-between'
    }
}

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            anchorEl: null
        }
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleMenu = (event) => { this.setState({ anchorEl: event.currentTarget }) }

    handleClose = () => { this.setState({ anchorEl: null }) }

    handleLogout() {
        this.setState({ anchorEl: null })
        this.props.logoutUser()
        this.props.logoutCooker()
    }
       
    render () {
        const { classes, isAuthenticated, user, cooker } = this.props;
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        
        //Onglet quand on est pas connecté :
        const guestLinks = (
            <div>
                <IconButton 
                    aria-owns={ open ? 'menu-appbar': undefined }
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.handleMenu}
                >
                    <MoreVert />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    open={open}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/connection">Connection</Link>
                    </MenuItem>
                    <MenuItem onClick={ this.handleClose }>
                        <Link to="/cookerconnection">Connection as a cooker</Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/registration">Registration</Link>
                    </MenuItem>
                    <MenuItem onClick={ this.handleClose }>
                        <Link to="/cookerregistration">Registration as a cooker</Link>
                    </MenuItem>
                </Menu>
            </div>
        )

        //Onglet quand on est connecté :
        const authLinks = isAuthenticated && (
            <div>
                <IconButton 
                    aria-owns={ open ? 'menu-appbar': undefined }
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.handleMenu}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    open={open}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to={`/profile/${user._id}`}>Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={ this.handleClose }>
                    <Link to={`/profile/${cooker._id}`}>Cooker Profile</Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to="/#" onClick={this.handleLogout}>Logout</Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/Api">Api Ademam recipes</Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/about">About Us</Link>
                    </MenuItem>
                </Menu>
            </div>
        )
        
        //Barre du site
        return (
            <div className={classes.root}>
                <AppBar position="fixed" style={{ backgroundColor: '#607d8b' }}>
                    <Toolbar className={classes.space}>
                        <Link to="/" className={classes.logo}>UCOOK</Link>
                        { isAuthenticated ? authLinks : guestLinks }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    cooker: state.auth.cooker

})

export default connect(mapStateToProps, { logoutUser, logoutCooker })(withStyles(styles)(Header))