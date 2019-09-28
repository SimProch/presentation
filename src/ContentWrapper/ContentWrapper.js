import React from 'react';
import './ContentWrapper.css'
import { Content } from '../Content/Content'

export class ContentWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: props.slides
        }
    }

    render() {
        return this.state.slides.map((slide, index) =>
            <Content key={index} title={this.state.slides[index].title} content={this.state.slides[index].content} visible={this.props.slides[index].visibleText} isRight={this.props.slides[index].isRight} />
        )
    }
}