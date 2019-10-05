import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import ResetButton from './ResetButton';
import ScoreBox from './ScoreBox';
import logo from '../assets/img/ia-logo-back.png';
import nodeBlack from '../assets/img/ia-logo-dot-black.png';
import nodeBlue from '../assets/img/ia-logo-dot-blue.png';
import nodeGreen from '../assets/img/ia-logo-dot-green.png';
import nodeRed from '../assets/img/ia-logo-dot-red.png';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        justifyContent: 'flex-start',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    logoContainer: {
        position: 'relative',
        '& img': { zIndex: '-1', width: '100%', display: 'block' }
    },
    location1: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(171%, 13%)'
    },
    location2: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(296%, 29%)'
    },
    location3: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(271%, 180%)'
    },
    location4: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(80%, 213%)'
    },
    location5: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(13%, 113%)'
    }
}));

const answers = {
    location1: 'nodeBlue',
    location2: 'nodeRed',
    location3: ['nodeBlack', 'nodeBlack2'],
    location4: 'nodeGreen',
    location5: ['nodeBlack', 'nodeBlack2']
}

const drop = active => ev => {
    const location = ev.target.id;
    ev.preventDefault();
    const data = ev.dataTransfer.getData(active);

    if (answers[location].includes(active) || answers[location] == active) {
        ev.target.appendChild(document.getElementById(data));
    }
};

const onDragStart = setActive => ev => {
    const nodeName = ev.target.id;
    
    setActive(nodeName);
    ev.dataTransfer.setData(nodeName, nodeName);
};

const Logo = ({ classes, active }) => (
    <div className={classes.logoContainer} onDrop={drop(active)} onDragOver={ev => ev.preventDefault()}>
        <div id="location1" className={classes.location1}></div>
        <div id="location2" className={classes.location2}></div>
        <div id="location3" className={classes.location3}></div>
        <div id="location4" className={classes.location4}></div>
        <div id="location5" className={classes.location5}></div>
        <img id="logo" src={logo} alt="Logo" />
    </div>
);

const Node = ({ classes, nodes, setActive }) => (
    <div>
        <img
            id="nodeBlack"
            src={nodeBlack}
            alt="Black Node"
            draggable={!nodes.location1}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeBlack2"
            src={nodeBlack}
            alt="Black Node Two"
            draggable={!nodes.location2}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeBlue"
            src={nodeBlue}
            alt="Blue Node"
            draggable={!nodes.location3}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeGreen"
            src={nodeGreen}
            alt="Green Node"
            draggable={!nodes.location4}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeRed"
            src={nodeRed}
            alt="Red Node"
            draggable={!nodes.location5}
            onDragStart={onDragStart(setActive)}
        />
    </div>
);

const LogoChallenge = () => {
    const classes = useStyles();
    const [nodes, setNodes] = React.useState({
        location1: false,
        location2: false,
        location3: false,
        location4: false,
        location5: false
    });
    const [score, setScore] = React.useState(0);
    const [active, setActive] = React.useState();

    const resetGame = () => {
        setScore(0);
        setNodes({
            location1: false,
            location2: false,
            location3: false,
            location4: false,
            location5: false
        });
    };

    return (
        <Container maxWidth="sm">
            <Paper className={classes.root}>
                <Header />
                <ResetButton resetGame={resetGame} />
                <ScoreBox score={score} />
                <Logo classes={classes} active={active} />
                <Node classes={classes} nodes={nodes} setActive={setActive} />
            </Paper>
        </Container>
    );
};

export default LogoChallenge;
