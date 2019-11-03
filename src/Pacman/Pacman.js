import React from 'react';
import './Pacman.css';

export class Pacman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changeVisibilityCallback: props.changeVisibilityCallback
        }
    }

    render() {
        return (
            <div onClick={() => this.state.changeVisibilityCallback(this.props.id)} className={this.props.visible ? 'show-pacman' : 'hide-pacman'}>
                <svg id="pacman" viewBox="0 0 10 10">
                    <circle cx="50%" cy="50%" r="25%" />
                </svg>
            </div>
        );
    }
}