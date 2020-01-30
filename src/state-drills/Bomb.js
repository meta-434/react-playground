import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datetime: new Date(),
            count: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            this.setState({ datetime: new Date(), count: newCount })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    isTickOrTockOrBoom () {
        if (this.state.count >= 8) {
            return `boom!`;
        }
        else if ( parseInt(this.state.datetime.toLocaleString().slice(-5, -3), 10) % 2 === 0 )  {
            return `tick`;
        } else {
            return `tock`;
        }
    }

    render() {
        return (
                <p>{this.isTickOrTockOrBoom()}</p>
        )
    }
}
