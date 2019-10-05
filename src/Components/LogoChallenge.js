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
    nodeOne: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(171%, 13%)'
    },
    nodeTwo: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(296%, 29%)'
    },
    nodeThree: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(271%, 180%)'
    },
    nodeFour: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(80%, 213%)'
    },
    nodeFive: {
        border: '5px solid red',
        position: 'absolute',
        width: '22%',
        height: '22%',
        borderRadius: '50%',
        transform: 'translate(13%, 113%)'
    }
}));

const drop = ev => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
};

const Logo = ({ classes }) => (
    <div className={classes.logoContainer} onDrop={drop} onDragOver={ev => ev.preventDefault()}>
        <div className={classes.nodeOne}></div>
        <div className={classes.nodeTwo}></div>
        <div className={classes.nodeThree}></div>
        <div className={classes.nodeFour}></div>
        <div className={classes.nodeFive}></div>
        <img id="logo" src={logo} alt="Logo" />
    </div>
);

const Node = ({ classes }) => (
    <div>
        <img
            id="nodeBlack"
            src={nodeBlack}
            alt="Black Node"
            draggable="true"
            onDragStart={ev => ev.dataTransfer.setData('text', ev.target.id)}
        />
        <img
            id="nodeBlack2"
            src={nodeBlack}
            alt="Black Node Two"
            draggable="true"
            onDragStart={ev => ev.dataTransfer.setData('text', ev.target.id)}
        />
        <img
            id="nodeBlue"
            src={nodeBlue}
            alt="Blue Node"
            draggable="true"
            onDragStart={ev => ev.dataTransfer.setData('text', ev.target.id)}
        />
        <img
            id="nodeGreen"
            src={nodeGreen}
            alt="Green Node"
            draggable="true"
            onDragStart={ev => ev.dataTransfer.setData('text', ev.target.id)}
        />
        <img
            id="nodeRed"
            src={nodeRed}
            alt="Red Node"
            draggable="true"
            onDragStart={ev => ev.dataTransfer.setData('text', ev.target.id)}
        />
    </div>
);

const LogoChallenge = () => {
    const classes = useStyles();
    const [nodes, setNodes] = React.useState({
        nodeLocation1: [0, 0],
        nodeLocation2: [0, 0],
        nodeLocation3: [0, 0],
        nodeLocation4: [0, 0],
        nodeLocation5: [0, 0]
    });
    const [score, setScore] = React.useState(0);

    const resetGame = () =>
        setNodes({
            nodeLocation1: [0, 0],
            nodeLocation2: [0, 0],
            nodeLocation3: [0, 0],
            nodeLocation4: [0, 0],
            nodeLocation5: [0, 0]
        });

    return (
        <Container maxWidth="sm">
            <Paper className={classes.root}>
                <Header />
                <ResetButton resetGame={resetGame} />
                <ScoreBox score={score} />
                <Logo classes={classes} />
                <Node classes={classes} />
            </Paper>
        </Container>
    );
};

export default LogoChallenge;
