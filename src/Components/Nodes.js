import React from 'react';
import nodeBlack from '../assets/img/ia-logo-dot-black.png';
import nodeBlue from '../assets/img/ia-logo-dot-blue.png';
import nodeGreen from '../assets/img/ia-logo-dot-green.png';
import nodeRed from '../assets/img/ia-logo-dot-red.png';

const onDragStart = setActive => ev => {
    const nodeName = ev.target.id;

    setActive(nodeName);
    ev.dataTransfer.setData(nodeName, nodeName);
};

const Nodes = ({ locations, setActive }) => (
    <div>
        <img
            id="nodeBlack"
            src={nodeBlack}
            alt="Black Node"
            draggable={!locations.location1}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeBlack2"
            src={nodeBlack}
            alt="Black Node Two"
            draggable={!locations.location2}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeBlue"
            src={nodeBlue}
            alt="Blue Node"
            draggable={!locations.location3}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeGreen"
            src={nodeGreen}
            alt="Green Node"
            draggable={!locations.location4}
            onDragStart={onDragStart(setActive)}
        />
        <img
            id="nodeRed"
            src={nodeRed}
            alt="Red Node"
            draggable={!locations.location5}
            onDragStart={onDragStart(setActive)}
        />
    </div>
);

export default Nodes;
