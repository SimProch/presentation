import React from 'react';
import './Content.css';

export class Content extends React.Component {
    didUpdate;

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            content: props.content,
            needsUpdate: false
        }
    }

    componentDidMount() {
        this.setHtmlClass(true);
    }

    componentDidUpdate() {
        if (this.state.needsUpdate && !this.didUpdate) {
            this.setHtmlClass();
            this.didUpdate = true;
        } else {
            this.didUpdate = false;
        }
    }

    setHtmlClass(first) {
        if (first) {
            if (this.props.id === 0) this.setPosition(false, true, false, 'show-content-from-right');
            else this.setPosition(false, false, true, 'hide-content hide-content-to-right');
            this.didUpdate = true;
            return;
        }
        let result = '';
        if (this.props.selected === this.state.id) {
            if (this.state.isLeft) {
                result = 'show-content-from-left';
                this.setPosition(false, true, false, result);
            }
            else if (this.state.isRight) {
                result = 'show-content-from-right';
                this.setPosition(false, true, false, result);
            }
        }
        else if (this.state.id > this.props.selected) {
            result = 'hide-content-to-right';
            this.setPosition(false, false, true, result);
        }
        else if (this.state.id < this.props.selected) {
            result = 'hide-content-to-left';
            this.setPosition(true, false, false, result);
        }
    }

    setPosition(left, visible, right, htmlClass) {
        this.setState({
            htmlClass: htmlClass,
            isLeft: left,
            isVisible: visible,
            isRight: right,
            needsUpdate: true,
        })
    }

    render() {
        return (
            <div className={this.state.htmlClass}>
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