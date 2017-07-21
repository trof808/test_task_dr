import React, { Component } from 'react';
import Square from '../components/Square';

const squares = [
    { id: 1, name: 'sq1' },
    { id: 2, name: 'sq2' },
    { id: 3, name: 'sq3' },
    { id: 4, name: 'sq4' },
    { id: 5, name: 'sq5' },
    { id: 6, name: 'sq6' },
    { id: 7, name: 'sq7' },
    { id: 8, name: 'sq8' },
    { id: 9, name: 'sq9' },
    { id: 10, name: 'sq10' },
    { id: 11, name: 'sq11' },
    { id: 12, name: 'sq12' },
    { id: 13, name: 'sq13' },
    { id: 14, name: 'sq14' },
    { id: 15, name: 'sq15' },
    { id: 16, name: 'sq16' },
]

class SquareBlock extends Component {
    render() {
        return (
            <div>
                {
                    squares.map((square) => <Square key={square.id} id={square.id} name={square.name} />)
                }
            </div>
        )
    }
}

export default SquareBlock;