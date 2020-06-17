import React, { Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect} from 'react-redux'
import {
    getUserProfile,
    refreshUserProfile
} from '../../actions/profileActions'

const styles = {
    paper: {
        padding: 8
    },
    login: {

    },
    email: {
        color: '#888',
        marginBottom: 10

    },
    detailsBlock: {
        display: 'flex'
    },
    detail: {
        marginRight: 5,
        fontWeight: 'bold'
    },
    detailTitle: {
        marginLeft: 3,
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeigth: 'normal'
    },
    btnBlock: {
        width: '100%',
        textAlign: 'right'
    },
    btnFollow: {
        backgroundColor: '#80deea',
        color: '#006064',
        '&:hover': {
            color: '#80deea',
            borderColor: '#80deea',
            backgroundColor: '#006064'
        }
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
        
        return (
            <div>
                Profile Page
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