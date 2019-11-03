import React from 'react';
import './Background.css'
import { PacmanWrapper } from '../PacmanWrapper/PacmanWrapper'
import { ContentWrapper } from '../ContentWrapper/ContentWrapper'

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

export class Background extends React.Component {
    current = 0;
    isAnimationRunning;

    constructor(props) {
        super(props);
        const slides = Array(16).fill(true).map((_, index) => ({
            title: 'Title ' + index,
            content: 'Text ' + index,
            visibleText: index === 0,
            visiblePacman: true,
            isRight: index > 0,
        }))
        this.state = {
            slides: slides,
            selected: 0
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (!this.isAnimationRunning) {
            this.isAnimationRunning = true;
            this.handleArrowClick(e);
            setTimeout(() => (this.isAnimationRunning = false), 1250);
        }
    }

    handleArrowClick(e) {
        if (e.keyCode === RIGHT_ARROW && this.state.selected < this.state.slides.length) {
            this.changePacmanVisibilityCallback(this.state.selected + 1);
        }
        else if (e.keyCode === LEFT_ARROW && this.state.selected > 0) {
            this.changePacmanVisibilityCallback(this.state.selected - 1);
        }
    }

    render() {
        return (
            <div className='background' tabIndex='0'>
                <div className='content'>
                    <ContentWrapper slides={this.state.slides} selected={this.state.selected} />
                </div>
                <div className='pacman-wrapper'>
                    <PacmanWrapper slides={this.state.slides} changeVisibilityCallback={this.changePacmanVisibilityCallback} />
                </div>
            </div>
        );
    }

    changePacmanVisibilityCallback = (index) => {
        this.setState(state => {
            const slides = state.slides.map((slide, i) => {
                if (index < i) {
                    slide.visiblePacman = true;
                    slide.isRight = true;
                }
                else {
                    slide.visiblePacman = false;
                    slide.isRight = false;
                }
                slide.visibleText = false;
                return slide;
            });
            slides[index].visibleText = true;
            slides[index].visiblePacman = true;
            return { slides: slides, selected: index }
        })
    }
}