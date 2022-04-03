let game = document.querySelector("#container")
const diceRoll = Math.floor(Math.random)*6 + 1;() => {}
   
    let score = 0;
    
    let result = score + diceRoll;
  
let button = document.addEventListener (click, () => {
    const diceRoll = Math.floor(Math.random)*6 + 1;() => {
    document.getElementById("score").addEventListener("click", result);
    diceRoll()
    let result = score + diceRoll;

       if (result == 1) {
         result.textContent("You have lost the game")
            
            }else if (result > 1 && result < 20) {
            result.textContent ("Congratulations! You have won")
            
                }else { 
                    result.textContent("Roll the dice again")

            }
            button.addEventListener('click', dice);
        }
        })
