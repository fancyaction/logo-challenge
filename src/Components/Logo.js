import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/img/ia-logo-back.png';

const useStyles = makeStyles(theme => ({
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
};

const Logo = ({ active, updateScore }) => {
    const classes = useStyles();

    const drop = ev => {
        ev.preventDefault();
        const location = ev.target.id;
        const data = ev.dataTransfer.getData(active);

        if ('logo' === location) {
            return;
        } else if (answers[location].includes(active) || answers[location] === active) {
            ev.target.appendChild(document.getElementById(data));
            updateScore(location);
        }
    };

    return (
        <div className={classes.logoContainer} onDrop={drop} onDragOver={ev => ev.preventDefault()}>
            <div id="location1" className={classes.location1}></div>
            <div id="location2" className={classes.location2}></div>
            <div id="location3" className={classes.location3}></div>
            <div id="location4" className={classes.location4}></div>
            <div id="location5" className={classes.location5}></div>
            <img id="logo" src={logo} alt="Logo" draggable={false} />
        </div>
    );
};

export default Logo;
