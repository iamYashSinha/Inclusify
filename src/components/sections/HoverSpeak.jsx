import React from 'react';

class HoverSpeak extends React.Component {
    handleHover = () => {
        const { text } = this.props;

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Speech synthesis is not available in this browser.');
        }
    };

    render() {
        return (
            <div onMouseEnter={this.handleHover}>
                {this.props.children}
            </div>
        );
    }
}

export default HoverSpeak;