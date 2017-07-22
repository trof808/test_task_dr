import React, { Component } from 'react';

class Square extends Component {
    render() {
        const styles = {
            circle: {
                backgroundColor: '#000',
                height: '100%',
                borderRadius: '50%',
                opacity: this.props.opacity
            },
            square: {
                height: '100px',
                border: '2px solid #000'
            }
        }
        return (
            <div className="four wide column" style={styles.square}>
                <div style={styles.circle}>

                </div>
            </div>
        )
    }
}

export default Square;