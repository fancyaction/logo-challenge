import React, { Fragment } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';

const SuccessWindow = ({ show, resetGame }) => (
    <Fragment>
        <canvas id="success-canvas" style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: show ? 0 : -5 }} />
        <Dialog open={show} fullWidth maxWidth="xs" aria-labelledby="you-won" aria-describedby="success-window">
            <DialogTitle id="success-text">You Won!</DialogTitle>
            <DialogActions>
                <Button onClick={resetGame} color="primary" autoFocus>
                    Try Again?
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
);

export default SuccessWindow;
