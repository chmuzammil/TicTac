import React, { useEffect, useState } from 'react'
import Square from './Square'

const Canvas = () => {


    const [state, setState] = useState(Array(9).fill(null))
    const [isXturn, setIsXTurn] = useState(true)

 
    function handleClick(index) {
        const stateCopy = [...state];
        if (isXturn) {
            if (stateCopy[index] === null) {
                stateCopy[index] = "x";
                setIsXTurn(!isXturn);
            }
            else {

            }
        }
        else {
            if (stateCopy[index] === null) {
            stateCopy[index] = "o";
            setIsXTurn(!isXturn);
            }
        }
        
        setState(stateCopy)
        console.log(state);

    }
    const checkDraw = () => {

        const arr = state.some(num => num === null);

        return arr;
    }

    const draw = !checkDraw();
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] !== null && state[a] === state[c]) {
                return true;

            }

        }
        return false;
    }
    const isWinner = checkWinner();
    const DecideWinner = () => {
        let winner = null;
        if (isXturn) {
            winner = "O";
        }
        else {
            winner = "X";
        }
        return winner;

    }
    const Winner = DecideWinner();
    return (
        <div className="container">
            {
                isWinner ? (<div className='title'><h5 style={{ color: 'white' }}>'{Winner}' Wonned</h5><button onClick={()=> {setState(Array(9).fill(null)) }}>Paly Again</button></div>) :
                    draw ? (<div className='title'><h5 style={{ color: 'white' }}>Draw</h5>
                            <button onClick={()=> {setState(Array(9).fill(null)) }}>Paly Again</button></div>) : (

                        <>
                            <h5 style={{ color: 'white' }}>{isXturn ? "X" : "O"} Turn</h5>
                            <div className="row">
                                <Square onClick={() => handleClick(0)} value={state[0]} />
                                <Square onClick={() => handleClick(1)} value={state[1]} />
                                <Square onClick={() => handleClick(2)} value={state[2]} />
                            </div>
                            <div className="row">
                                <Square onClick={() => handleClick(3)} value={state[3]} />
                                <Square onClick={() => handleClick(4)} value={state[4]} />
                                <Square onClick={() => handleClick(5)} value={state[5]} />
                            </div>
                            <div className="row">
                                <Square onClick={() => handleClick(6)} value={state[6]} />
                                <Square onClick={() => handleClick(7)} value={state[7]} />
                                <Square onClick={() => handleClick(8)} value={state[8]} />
                            </div>
                        </>
                    )}
        </div>
    )
}

export default Canvas