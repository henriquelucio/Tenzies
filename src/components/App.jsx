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
        /* let arrayRndNumb = []
        for (let i = 0; i < 10; i++) {
            let rndNumber = Math.floor(Math.random() * 6)+1
            arrayRndNumb.push(rndNumber)
        }
        return arrayRndNumb */
    }

    function rollDice(){
        setDice(
            allNewDice()
        )
    }

    const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value}/>)

    return(
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}