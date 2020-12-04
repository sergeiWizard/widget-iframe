import React from 'react';

const WidgetEligible = () => {
    return (
        <iframe
            className="waivio"
            src={`http://localhost:3000/rewards/active?display=widget&userName=vallon&ref=vallon`}
            height="1000"
            width="1000"
            frameBorder="0"
        >
            Can't load Rewards widget.
        </iframe>
    )
}

export default WidgetEligible;