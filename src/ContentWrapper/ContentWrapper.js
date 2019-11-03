import React from 'react';
import './ContentWrapper.css'
import { Content } from '../Content/Content'

export class ContentWrapper extends React.Component {
    render() {
        return this.props.slides.map((_, index) =>
            <Content
                key={index}
                title={this.props.slides[index].title}
                content={this.props.slides[index].content}
                visibleText={this.props.slides[index].visibleText}
                visiblePacman={this.props.slides[index].visiblePacman}
                isRight={this.props.slides[index].isRight}
                selected={this.props.selected}
                id={index}
            />
        )
    }
}