import React from 'react';

const WidgetAll = () => {
    return (
        <iframe
            className="waivio"
            src={`http://localhost:3000/rewards/all?display=widget&userName=vallon&ref=vallon`}
            height="800"
            width="750"
            frameBorder="0"
        >
            Can't load Rewards widget.
        </iframe>
    )
}

export default WidgetAll;