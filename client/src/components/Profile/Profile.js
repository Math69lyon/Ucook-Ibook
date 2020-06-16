import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'

import {
    getUserProfile,
    updateUserProfile
} from '../../actions/profileActions'

const styles = {
	paper: {
		padding: 8
	},
	login: {

	},
	email: {
		color: '#888',
		marginBottom: 5
	}
}

class Profile extends Component {
	constructor (props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }
	render () {
		const {
			classes,
			loadingProfile,
			auth,
			user,
			profile
		} = this.props

		let profileInfo
		if (profile) {
			profileInfo = (
				<Paper className={classes.paper}>
					<h1 className={classes.login}>{profile.login}</h1>
					<div className={classes.email}>{profile.email}</div>
				</Paper>
			)
		} 
		return (
			<div>
				{ loadingProfile ? <div>Loading</div> : profileInfo }
			</div> 
		)
	}
}

const mapStateToProps = (state) => ({
    profile: state.profile.user,
    loadingProfile: state.profile.loading,
    auth: state.auth,
    user: state.auth.user
})

export default connect(mapStateToProps, { getUserProfile })(withStyles(styles)(Profile))