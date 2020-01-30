import React from 'react';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { type: null };
    }

    handleButtonClick = (e) => {
        const newType = e.target.innerHTML;
        this.setState({ type: newType })
    }

    render() {
        return (
            <div>
                <div>Hello, {(this.state.type || '_____')}!</div>
                <button onClick={(e) => this.handleButtonClick(e)}>
                    friend
                </button>
                <button onClick={(e) => this.handleButtonClick(e)}>
                    React
                </button>
                <button onClick={(e) => this.handleButtonClick(e)}>
                    world
                </button>
            </div>
        )
    }
}
