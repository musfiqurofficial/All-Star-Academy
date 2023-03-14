import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
    return (
        <div className="App">
            <InlineWidget url="https://calendly.com/brandysimison/birthday-party" />
        </div>
    );
};

export default Calendly;