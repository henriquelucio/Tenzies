import React from "react"
import Die from "/src/components/Die.jsx"
import {nanoid} from "nanoid"

export default function App(){
    const [dice, setDice] = React.useState(allNewDice)

    function allNewDice(){
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
    }

    /* function rollDice(){
        setDice(
            allNewDice()
        )
    } */

    function rollDice(){
        setDice(prevDice => prevDice.map(die =>
            die.isHeld == false ? 
                {...die, value: Math.ceil(Math.random() * 6)} : die
        ))
    }

    function hold(id){
        setDice(prevDice => prevDice.map(die => 
            die.id === id ? 
                {...die, isHeld: !die.isHeld} : die
                
            ))
    }

    const diceElements = dice.map(dieObj => (
        <Die 
            isHeld={dieObj.isHeld}
            key={dieObj.id} 
            value={dieObj.value}
            hold={() => hold(dieObj.id)}
        />
        )
    )

    return(
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}