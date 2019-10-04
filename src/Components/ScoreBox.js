import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';


const ScoreBox = ({ score }) => {
    return (
        <Fragment>
            <Typography color="textSecondary" variant="h4" style={{ margin: '25px 0' }}>
                Score: <span style={{ color: 'blue' }}>{score}</span> out of 5
            </Typography>
        </Fragment>
    )
}

export default ScoreBox;
