import { useState } from "react"
import diceEmpty from "/src/assets/images/dice-empty.png"
import diceOne from "/src/assets/images/dice1.png"
import diceTwo from "/src/assets/images/dice2.png"
import diceThree from "/src/assets/images/dice3.png"
import diceFour from "/src/assets/images/dice4.png"
import diceFive from "/src/assets/images/dice5.png"
import diceSix from "/src/assets/images/dice6.png"


const Dice = () => {
    const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
    let max = 6
    let min = 1
    let randomNumber = 1
    const [randomDice, setRandomDice] = useState(diceImages[randomNumber]);
    
    
    const handleClick = () => {
        setRandomDice(diceEmpty)
        setTimeout(() => {
            randomNumber = Math.floor(Math.random()*(max-min)+min)
            setRandomDice(diceImages[randomNumber])
        }, 1000);
    }  

    return (
        <>
        <img src={randomDice} alt="dice" onClick={handleClick} style={{height: "85px"}}/>
            <p>Dice</p>
        </>
      );
}
 
export default Dice;
