import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <Fragment>
            <Typography color="textPrimary" variant="h3" gutterBottom>
                Logo Challenge
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Guess the correct placement of each colored node in the logo.
            </Typography>
        </Fragment>
    )
}

export default Header;
