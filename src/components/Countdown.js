import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

class Countdown extends React.Component {
    constructor(props) {
        super(props);

        const endTime = this.calculateEndTime(props.startTime, props.duration);
        this.state = {
            endTime: endTime,
            timeLeft: this.calculateTimeLeft(endTime)
        };
    }

    render() {
        if (this.state.timeLeft.seconds() > 0) {
            return <h2>{this.getTimeLeft()} left</h2>;
        } else {
            clearInterval(this.interval);
            return <h2>Time to go home!</h2>;
        }
    }

    calculateEndTime(startTime, duration) {
        const startTimeMoment = moment(startTime, "LT");
        const durationMoment = moment.duration(duration);
        const endTimeMoment = startTimeMoment.add(durationMoment);
        return endTimeMoment;
    }

    calculateTimeLeft(endTime) {
        endTime = endTime !== undefined
            ? endTime
            : this.state.endTime;

        const timeLeft = endTime.diff(moment());
        const timeLeftDuration = moment.duration(timeLeft);
        return timeLeftDuration;
    }

    getTimeLeft() {
        return this.state.timeLeft.format("HH:mm:ss")
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateTimeLeft();
        }, 1000);
    }

    updateTimeLeft() {
        const newTimeLeft = this.calculateTimeLeft();
        console.log(newTimeLeft);

        this.setState({
            timeLeft: newTimeLeft
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Countdown;