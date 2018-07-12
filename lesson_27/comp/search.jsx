import React from "react";

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }
    textFromSearch() {
        this.state.value = document.querySelector(".input").value;
        this.props.getSearchStateValue(this.state.value);
    }


    render() {
        return(
            <input type="text"
            className="input"
            placeholder="search"
            onChange = {this.textFromSearch.bind(this)}
            />
        )
    }
}