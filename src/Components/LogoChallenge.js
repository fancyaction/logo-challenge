import React from 'react'
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import ResetButton from './ResetButton';
// import ScoreBox from './ScoreBox';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        justifyContent: 'flex-start',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
}));

const LogoChallenge = () => {
    const classes = useStyles();
    const [nodes, setNodes] = React.useState({
        nodeLocation1: [0, 0],
        nodeLocation2: [0, 0],
        nodeLocation3: [0, 0],
        nodeLocation4: [0, 0],
        nodeLocation5: [0, 0],
    });
    const [score, setScore] = React.useState(0);


    const resetGame = () => setNodes({
        nodeLocation1: [0, 0],
        nodeLocation2: [0, 0],
        nodeLocation3: [0, 0],
        nodeLocation4: [0, 0],
        nodeLocation5: [0, 0],
    })

    return (
        <Container maxWidth="sm">
            <Paper className={classes.root}>
                <Header />
                <ResetButton resetGame={resetGame} />
                {/* <ScoreBox score={score} /> */}
            </Paper>
        </Container>
    )
}

export default LogoChallenge;