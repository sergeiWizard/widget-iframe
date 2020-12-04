import React from 'react';

const WidgetReserved = () => {
    return (
        <iframe
            className="waivio"
            src={`http://localhost:3000/rewards/reserved?display=widget&userName=vallon&ref=vallon`}
            width="800"
            height="750"
            frameBorder="0"
        >
            Can't load Rewards widget.
        </iframe>
    )
}

export default WidgetReserved;