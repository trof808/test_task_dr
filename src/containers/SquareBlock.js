import React, { Component } from 'react';
import Square from '../components/Square';

const squares = [
    { id: 1, name: 'sq1', opacity: 0 },
    { id: 2, name: 'sq2', opacity: 0 },
    { id: 3, name: 'sq3', opacity: 0 },
    { id: 4, name: 'sq4', opacity: 0 },
    { id: 5, name: 'sq5', opacity: 0 },
    { id: 6, name: 'sq6', opacity: 0 },
    { id: 7, name: 'sq7', opacity: 0 },
    { id: 8, name: 'sq8', opacity: 0 },
    { id: 9, name: 'sq9', opacity: 0 },
    { id: 10, name: 'sq10', opacity: 0 },
    { id: 11, name: 'sq11', opacity: 0 },
    { id: 12, name: 'sq12', opacity: 0 },
    { id: 13, name: 'sq13', opacity: 0 },
    { id: 14, name: 'sq14', opacity: 0 },
    { id: 15, name: 'sq15', opacity: 0 },
    { id: 16, name: 'sq16', opacity: 0 },
]

class SquareBlock extends Component {
    state = {
        squares: []
    }

    componentWillMount() {
        this.setState({ squares: squares })
    }

    handleSquareClick = (squareId) => {
        const nextSquares = this.state.squares.map((square) => {
            if(squareId === square.id) {
                return Object.assign({}, square, {
                    opacity: 1
                })
            } else {
                return square
            }
        })

        this.setState({ squares: nextSquares })
    }

    render() {
        const style = {
            border: '1px solid #000'
        }
        
        return (
            <div className="six wide column" style={style}>
                <div className="ui stackable grid">
                    {
                        this.state.squares.map((square) => ( 
                            <Square 
                                key={square.id} 
                                id={square.id} 
                                name={square.name} 
                                opacity={square.opacity}
                                handleSquareClick={this.handleSquareClick}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default SquareBlock;