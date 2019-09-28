import React from 'react';
import './Background.css'
import { PacmanWrapper } from '../PacmanWrapper/PacmanWrapper'
import { ContentWrapper } from '../ContentWrapper/ContentWrapper'

export class Background extends React.Component {
    current = 0;
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
            slides: slides
        }
    }

    render() {
        return (
            <div className='background'>
                <div className='content'>
                    <ContentWrapper slides={this.state.slides} />
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
            return { slides }
        })
    }
}