import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import ResetButton from './ResetButton';
import ScoreBox from './ScoreBox';
import Nodes from './Nodes';
import Logo from './Logo';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        justifyContent: 'flex-start',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
}));

const LogoChallenge = () => {
    const classes = useStyles();
    const [locations, setLocations] = React.useState({
        location1: false,
        location2: false,
        location3: false,
        location4: false,
        location5: false
    });
    const [score, setScore] = React.useState(0);
    const [active, setActive] = React.useState();

    const resetGame = () => {
        window.location.reload();
    };

    const updateScore = location => {
        setLocations({...locations, [location]: true});
        setScore(score + 1);
        return 5 === score + 1 ? console.log('YOU WIN!') : '';
    }

    return (
        <Container maxWidth="sm">
            <Paper className={classes.root}>
                <Header />
                <ResetButton resetGame={resetGame} />
                <ScoreBox score={score} />
                <Logo active={active} updateScore={updateScore} />
                <Nodes locations={locations} setActive={setActive} />
            </Paper>
        </Container>
    );
};

export default LogoChallenge;
