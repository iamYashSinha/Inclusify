
import React from 'react';

class HoverSpeak extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSpeaking: false, // Track whether speech synthesis is currently active
        };
    }

    handleHover = () => {
        const { text, rate, pitch, lang } = this.props;

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = rate || 1.0; // Speech rate (default: 1.0)
            utterance.pitch = pitch || 1.0; // Speech pitch (default: 1.0)
            utterance.lang = lang || 'en-US'; // Speech language (default: English)

            // Set event handlers to track speech synthesis progress
            utterance.onstart = () => {
                this.setState({ isSpeaking: true });
            };

            utterance.onend = () => {
                this.setState({ isSpeaking: false });
            };

            // Speak the text
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Speech synthesis is not available in this browser.');
        }
    };

    handleFocus = () => {
        // Call the handleHover function when the component is focused (e.g., via tab navigation).
        this.handleHover();
    };

    render() {
        const { isSpeaking } = this.state;
        const { children, className } = this.props;

        return (
            <div
                onMouseEnter={this.handleHover}
                onFocus={this.handleFocus}
                tabIndex={0}
                className={`hover-speak ${className || ''}`}
            >
                {children}
                {isSpeaking && <span className="hover-speak-indicator">🔊</span>}
            </div>
        );
    }
}

export default HoverSpeak;