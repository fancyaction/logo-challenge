import React from 'react';
import nodeBlack from '../assets/img/ia-logo-dot-black.png';
import nodeBlue from '../assets/img/ia-logo-dot-blue.png';
import nodeGreen from '../assets/img/ia-logo-dot-green.png';
import nodeRed from '../assets/img/ia-logo-dot-red.png';

const Nodes = ({ locations, setActive }) => {
    const onDragStart = ev => {
        const nodeName = ev.target.id;

        setActive(nodeName);
        ev.dataTransfer.setData(nodeName, nodeName);
    };

    return (
        <div>
            <img
                id="nodeBlack"
                src={nodeBlack}
                alt="Black Node"
                draggable={!locations.location3 || !locations.location5}
                style={{ cursor: !locations.location3 || !locations.location5 ? 'grab' : 'not-allowed' }}
                onDragStart={onDragStart}
            />
            <img
                id="nodeBlack2"
                src={nodeBlack}
                alt="Black Node Two"
                draggable={!locations.location3 || !locations.location5}
                style={{ cursor: !locations.location3 || !locations.location5 ? 'grab' : 'not-allowed' }}
                onDragStart={onDragStart}
            />
            <img
                id="nodeBlue"
                src={nodeBlue}
                alt="Blue Node"
                draggable={!locations.location1}
                style={{ cursor: !locations.location1 ? 'grab' : 'not-allowed' }}

                onDragStart={onDragStart}
            />
            <img
                id="nodeGreen"
                src={nodeGreen}
                alt="Green Node"
                draggable={!locations.location4}
                style={{ cursor: !locations.location4 ? 'grab' : 'not-allowed' }}
                onDragStart={onDragStart}
            />
            <img id="nodeRed" src={nodeRed} alt="Red Node" draggable={!locations.location2} onDragStart={onDragStart} />
        </div>
    );
};

export default Nodes;
