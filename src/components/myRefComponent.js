import React from "react";

class MyRefComponent extends React.Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    render() {
        return <div ref={this.myRef}>Ref div</div>
    }
}

export default MyRefComponent;