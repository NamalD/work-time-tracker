import React from 'react';

class PreStart extends React.Component {
    constructor() {
        super();

        this.state = {
            startTime: "09:00",
            duration: "08:00"
        };

        this.setStartTime = this.setStartTime.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.prepareDay = this.prepareDay.bind(this);
    }

    render() {
        return (
            <div>
                <DayProperties {...this.state} setStartTime={this.setStartTime} setDuration={this.setDuration} />
                <StartDay startDay={this.prepareDay} />
            </div>
        );
    }

    setStartTime(newStartTime) {
        this.setState({
            startTime: newStartTime
        });
    }

    setDuration(newDuration) {
        this.setState({
            duration: newDuration
        });
    }

    prepareDay() {
        this.props.startDay(this.state.startTime, this.state.duration);
    }
}

const DayProperties = ({ startTime, duration, setStartTime, setDuration }) => {
    function handleStartTimeChange(e) {
        setStartTime(e.target.value);
    }

    function handleDurationChange(e) {
        setDuration(e.target.value);
    }

    return (
        <div>
            <div>
                <label htmlFor="startTime">Start Time</label>
                <input type="time" id="startTime" value={startTime} onChange={handleStartTimeChange} />
            </div>
            <div>
                <label htmlFor="duration">Duration</label>
                <input type="time" id="duration" value={duration} onChange={handleDurationChange} />
            </div>
        </div>
    );
}

const StartDay = ({ startDay }) => {
    return (
        <button onClick={() => startDay()}>
            Start Day!
        </button>
    );
}

export default PreStart;