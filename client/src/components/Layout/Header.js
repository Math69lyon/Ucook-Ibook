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
<<<<<<< HEAD
import { logoutCooker } from '../../actions/authcookerActions'
=======
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf


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
<<<<<<< HEAD
    constructor(props) {
=======
    constructor (props) {
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
        super(props);
        this.state = {
            anchorEl: null
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

<<<<<<< HEAD
    handleMenu = (event) => { this.setState({ anchorEl: event.currentTarget }) }

    handleClose = () => { this.setState({ anchorEl: null }) }
=======
    handleMenu = (event) => { this.setState({ anchorEl: event.currentTarget })}

    handleClose = () => { this.setState({ anchorEl: null })}
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf

    handleLogout() {
        this.setState({ anchorEl: null })
        this.props.logoutUser()
<<<<<<< HEAD
        this.props.logoutCooker()
    }
    render() {
        const { classes, isAuthenticated, user, cooker } = this.props;
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)


        const guestLinks = ( <
            div >
            <
            IconButton aria - owns = { open ? 'menu-appbar' : undefined }
            aria - haspopup = "true"
            color = "inherit"
            onClick = { this.handleMenu } >
            <
            MoreVert / >
            <
            /IconButton> <
            Menu id = "menu-appbar"
            open = { open }
            anchorOrigin = {
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            transformOrigin = {
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            anchorEl = { anchorEl }
            onClose = { this.handleClose } >
            <
            MenuItem onClick = { this.handleClose } >
            <
            Link to = "/connection" > Connection < /Link> < /
            MenuItem > <
            MenuItem onClick = { this.handleClose } >
            <
            Link to = "/registration" > Registration < /Link> < /
            MenuItem > <
            MenuItem onClick = { this.handleClose } >
            <
            Link to = "/cookerregistration" > Registration as a cooker < /Link> < /
            MenuItem > <
            /Menu> < /
            div >
        )

        const authLinks = isAuthenticated && ( <
            div >
            <
            IconButton aria - owns = { open ? 'menu-appbar' : undefined }
            aria - haspopup = "true"
            color = "inherit"
            onClick = { this.handleMenu } >
            <
            AccountCircle / >
            <
            /IconButton> <
            Menu id = "menu-appbar"
            open = { open }
            anchorOrigin = {
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            transformOrigin = {
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            anchorEl = { anchorEl }
            onClose = { this.handleClose } >
            <
            MenuItem onClick = { this.handleClose } >
            <
            Link to = { `/profile/${user._id}` } > Profile < /Link> < /
            MenuItem > <
            MenuItem onClick = { this.handleClose } >
            <
            Link to = { `/profile/${cooker._id}` } > Cooker Profile < /Link> < /
            MenuItem > <
            MenuItem >
            <
            Link to = "/#"
            onClick = { this.handleLogout } > Logout < /Link> < /
            MenuItem > <
            /Menu> < /
            div >
        )

        return ( <
            div className = { classes.root } >
            <
            AppBar position = "static"
            style = {
                { backgroundColor: '#607d8b' }
            } >
            <
            Toolbar className = { classes.space } >
            <
            Link to = "/"
            className = { classes.logo } > UCOOK < /Link> { isAuthenticated ? authLinks : guestLinks } < /
            Toolbar > <
            /AppBar> < /
            div >
=======
    }
    render () {
        const { classes, isAuthenticated, user } = this.props;
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        

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
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/registration">Registration</Link>
                    </MenuItem>
                </Menu>
            </div>
        )

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
                    <MenuItem >
                        <Link to="/#" onClick={this.handleLogout}>Logout</Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
<<<<<<< HEAD
                        <Link to="/Api">Api Ademam recipes</Link>
=======
                        <Link to="/">Home</Link>
>>>>>>> 7e91b115fc548991abc87937d716619b84e59eb6
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/About">About Us</Link>
                    </MenuItem>
                </Menu>
            </div>
        )
        
        return (
            <div className={classes.root}>
                <AppBar position="fixed" style={{ backgroundColor: '#607d8b' }}>
                    <Toolbar className={classes.space}>
                        <Link to="/" className={classes.logo}>UCOOK</Link>
                        { isAuthenticated ? authLinks : guestLinks }
                    </Toolbar>
                </AppBar>
            </div>
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
<<<<<<< HEAD
    cooker: state.auth.cooker

})

export default connect(mapStateToProps, { logoutUser, logoutCooker })(withStyles(styles)(Header))
=======
})

export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(Header))
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
