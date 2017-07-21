import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Square;