import React from 'react';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSection: null
        };
    }

    handleSectionClick = (e, holdContent) => {
        this.setState({activeSection: e.target.innerHTML})
    }

    render () {
        const { sections } = this.props
        return (
            <ul>
                { Object.keys(sections).map(entry => {
                    return (
                      <li key={entry}>
                          <button
                              type='button'
                              onClick={(e) => this.handleSectionClick(e)}>{sections[entry].title}</button>
                          {(this.state.activeSection === sections[entry].title) && <p>{sections[entry].content}</p>}
                      </li>
                    );
                }) }
            </ul>
        )
    }
}
