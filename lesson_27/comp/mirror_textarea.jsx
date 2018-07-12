import React from "react";

export default class MirrorTextArea extends React.Component {

    render() {
        return(
            <div
            id="rightDiv"
            dangerouslySetInnerHTML={{__html:this.props.textAreaValue }}
            >
            </div>
        )
    }
}