import React from 'react';
import { Pacman } from '../Pacman/Pacman'

export class PacmanWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: props.slides,
            changeVisibilityCallback: props.changeVisibilityCallback
        }
    }

    render() {
        return this.state.slides.map((slide, index) =>
            <Pacman key={index} id={index} visible={slide.visiblePacman} changeVisibilityCallback={this.state.changeVisibilityCallback} />
        )
    }
}