import React from "react";

import MirrorTextArea from "./mirror_textarea";
import Textarea from "./textarea";
import Search from "./search";

export default class Complete extends React.Component {
    constructor() {
        super();
        this.state = {
            textState: "",
            textForDiv: "",
            searchState: ""
        }
    }
    getTextStateValue(text) {
        this.setState({
            textState: text,
            textForDiv: text
        })
    }

    getSearchStateValue(text) {
        this.setState({
            searchState: text
        })
    }
    render() {
        return(
            <div>
                <Search getSearchStateValue={this.getSearchStateValue.bind(this)}/>
                <Textarea getTextStateValue={this.getTextStateValue.bind(this)}/>
                <MirrorTextArea textAreaValue={ this.state.textForDiv }/>
            </div>
        )
    }
}