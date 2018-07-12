import React from "react";


export default class Textarea extends React.Component {
    constructor(){
        super();
        this.state = {
            text: ""
        }
    }
    textFromTextarea() {
        this.state.text = document.querySelector(".textarea").value;
        this.props.getTextStateValue(this.state.text);
    }
    render() {
        return(
            <textarea
            className="textarea"
            placeholder="enter your text here"
            onChange = {this.textFromTextarea.bind(this)}
            >
            </textarea>
        )

    }
}