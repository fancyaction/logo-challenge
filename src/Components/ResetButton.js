import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ResetButton = ({ resetGame }) => {
    const classes = useStyles();

    return (
        <Button color="primary" aria-label="reset" onClick={resetGame} disabled={false} className={classes.margin}>
            Reset
        </Button>
    );
}

export default ResetButton;