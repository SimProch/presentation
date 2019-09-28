import React from 'react';
import './Content.css';

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
            visible: props.visible,
            isRight: props.isRight
        }
    }

    render() {
        let htmlClass;
        if (!this.props.isRight && !this.props.visible) {
            htmlClass = 'hide-content-to-left';
        }
        else if (this.props.visible) {
            htmlClass = 'show-content-from-right';
        }
        else if (this.props.isRight) {
            htmlClass = 'hide-content';
        }

        return (
            <div className={htmlClass}>
                <div className='content-title'>
                    {this.state.title}
                </div>
                <div className='content-text'>
                    {this.state.content}
                </div>
            </div>
        );
    }
}