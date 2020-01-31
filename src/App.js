import React from 'react';
import './App.css';
import PreStart from "./components/PreStart.js";
import Countdown from "./components/Countdown.js"

class WorkTracker extends React.Component {
    constructor() {
        super();

        this.state = {
            dayStarted: false,
            startTime: null,
            workDuration: null
        };

        this.startDay = this.startDay.bind(this);
    }

    render() {
        if (!this.state.dayStarted) {
            return <PreStart startDay={this.startDay} />
        } else {
            return <Countdown startTime={this.state.startTime} duration={this.state.workDuration} />
        }
    }

    startDay(startTime, workDuration) {
        this.setState({
            dayStarted: true,
            startTime: startTime,
            workDuration: workDuration
        });
    }
}

function App() {
    return (
        <div className="App" >
            <h1>Time Tracker</h1>
            <WorkTracker />
        </div>
    );
}

export default App;