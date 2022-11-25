import React, { Component } from "react";

class SearchBarRef extends Component {
    constructor(props) {
        super(props);

        this.txtSearch = null;
        this.state = { term: '' };
        this.setInputSearchRef = e => {
            this.txtSearch = e;
        }
    }

    onInputChange(event) {
        console.log(this.txtSearch.value);
        this.setState({ term: this.txtSearch.value })
    }

    render() {
        return (
            <input
                value={this.state.term}
                onChange={this.onInputChange.bind(this)}
                ref={this.setInputSearchRef}
            />
        )
    }
}

export default SearchBarRef;