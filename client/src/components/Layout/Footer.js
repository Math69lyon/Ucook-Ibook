import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        textAlign: 'center',
        margin: 20,
        backgroundColor: '#607d8b'  
    }
}

const Footer = ({ classes }) => (
    <div className={classes.root}>
        <a href="https://facebook.com" title="Consultez nous sur facebook !" target="_blank"><img src="/Logos/facebook.jpg" alt="facebook"/></a>
        <a href="https://instagram.com" title="Suivez nous sur facebook !" target="_blank"><img src="/Logos/instagram.jpeg" alt="instagram"/></a>
    </div>
)

export default withStyles(styles)(Footer)