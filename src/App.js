import React, {useState} from "react";
import WidgetAll from "./WidgetAll";
import WidgetEligible from "./WidgetEligible";
import WidgetReserved from "./WidgetReserved";
import './App.css';

const App = () => {
    const [openAll, setOpenAll] = useState(false);
    const [openEligible, setOpenEligible] = useState(false);
    const [openReserved, setOpenReserved] = useState(false);

    const renderAllPage = () => {
        setOpenAll(true)
        setOpenEligible(false)
        setOpenReserved(false)
    }
    const renderEligiblePage = () => {
        setOpenAll(false)
        setOpenEligible(true)
        setOpenReserved(false)
    }
    const renderReservedPage = () => {
        setOpenAll(false)
        setOpenEligible(false)
        setOpenReserved(true)
    }

  return (
    <div className="App">
        <span>
            <div className="waivio-btn" style={{background: openAll && 'beige'}} onClick={renderAllPage}>All</div>
            <div className="waivio-btn" style={{background: openEligible && 'beige'}} onClick={renderEligiblePage}>Eligible</div>
            <div className="waivio-btn" style={{background: openReserved && 'beige'}} onClick={renderReservedPage}>Reserved</div>
        </span>

        <span style={{border: '1px solid black', width: '800px', height: '750px'}}>
            {openAll && <WidgetAll />}
            {openEligible && <WidgetEligible />}
            {openReserved && <WidgetReserved />}
        </span>
    </div>
  );
}

export default App;
