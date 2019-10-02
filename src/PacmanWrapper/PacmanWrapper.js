import React from 'react';
import { Pacman } from '../Pacman/Pacman'

export class PacmanWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changeVisibilityCallback: props.changeVisibilityCallback
        }
    }

    render() {
        return this.props.slides.map((slide, index) =>
            <Pacman key={index} id={index} visible={slide.visiblePacman} changeVisibilityCallback={this.state.changeVisibilityCallback} />
        )
    }
}