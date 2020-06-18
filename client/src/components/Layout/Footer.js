import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: '#607d8b'  
    }
}

const Footer = ({ classes }) => (
    <div className={classes.root}>
<<<<<<< HEAD
        <a href="https://facebook.com" title="Consultez nous sur facebook !" target="_blank"><img src="/Logos/facebook.jpg" alt="facebook"/></a>
        <a href="https://instagram.com" title="Suivez nous sur instagram !" target="_blank"><img src="/Logos/instagram.jpeg" alt="instagram"/></a>
=======
        <a href="https://facebook.com" title="Consultez nous sur Facebook !" target="_blank"><img src="/Logos/facebook.jpg" alt="facebook"/></a>
        <a href="https://instagram.com" title="Suivez nous sur Instagram !" target="_blank"><img src="/Logos/instagram.jpeg" alt="instagram"/></a>
        <a href="https://twittercom" title="Suivez nous sur Twitter !" target="_blank"><img src="/Logos/twitter.jpeg" alt="twitter"/></a>

>>>>>>> 62d5e800af562338fbeae91beafdea542b67ea89
    </div>
)

export default withStyles(styles)(Footer)