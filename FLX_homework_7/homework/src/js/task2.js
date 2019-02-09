let play = true;
let min = 0;
let max = 5;
let attempt = 3;
let startPrize = 10;
let maxPrize = 10;
const milion = 1000000;
let prize = 0;
let randomNumber = 0;
let number = 0;
let question = true;
play = confirm('Do you want to play a game?');
if(play === true){
    label:while (attempt > 0){
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        number = Number(prompt(
        `Enter a number from 0 to  ${max - min},
        Attempts left: ${attempt},
        Total prize:  ${maxPrize},
        Possible prize on current attempt: ${Math.floor(startPrize)} $`, ""));
        if (number === randomNumber && number[0] !== '') {
            if(attempt === 3){
                attempt--;
                prize = startPrize + maxPrize;
                maxPrize = Math.floor(maxPrize/2);
                (alert("Congratulation!   Your prize is: "+prize));
                question = confirm('Do you want to play a game?');
                if(question === !true){
                    (alert("Thank you for a game. Your prize is:" +prize));
                    question = confirm('Do you want to play a game?');
                    if(question === true){
                        attempt === 0; 
                    }else{
                        break label;
                    }
                }else{
                    attempt;
                }
            }else if(attempt === 2){
                attempt--;
                prize = startPrize + maxPrize;
                maxPrize = Math.floor(maxPrize/2);
                (alert("Congratulation!   Your prize is: "+prize));
                question = confirm('Do you want to play a game?');
                if(question === !true){
                    (alert("Thank you for a game. Your prize is:" +prize));
                    question = confirm('Do you want to play a game?');
                    if(question === true){
                        attempt === 0; 
                    }else{
                        break label;
                    }
                }else{
                    attempt;
                }
            }else if(attempt === 1){
                attempt--;
                prize = startPrize + maxPrize;
                maxPrize = Math.floor(maxPrize/2);
                (alert("Congratulation!   Your prize is: "+prize));
                question = confirm('Do you want to play a game?');
                if(question === !true){
                    (alert("Thank you for a game. Your prize is:" +prize));
                    question = confirm('Do you want to play a game?');
                    if(question === true){
                        attempt === 0; 
                    }else{
                        break label;
                    }
                }else{
                    attempt;
                }
            }
        }else {
            attempt--;
            startPrize = Math.floor(startPrize/2);
            maxPrize = Math.floor(maxPrize/2);
            (alert("Your prize is: 0"));
            question = confirm('Do you want to play a game?');
            if(question === !true){
                (alert("Thank you for a game. Your prize is:" +prize));
                question = confirm('Do you want to play a game?');
                if(question === true){
                    attempt === 0; 
                }else{
                    break label;
                }
            }else{
                attempt;
            }
        }
        if(attempt === 0){
            (alert("Thank you for a game. Your prize is:" +prize));
            let playAgain = confirm("Do you want to continue?");
            if(playAgain === true){
                let max = 10;
                let attempt = 3;
                let maxPrize = 30;
                while(attempt > 0){
                    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                    number = Number(prompt(`Enter a number from 0 to  ${max - min},
                    Attempts left: ${attempt},
                    Total prize:  ${maxPrize},
                    Possible prize on current attempt: ${Math.floor(startPrize)} $`, ""));
                    if (number === randomNumber && number[0] !== '') {
                        if(attempt === 3){
                            attempt--;
                            prize = startPrize + maxPrize;
                            maxPrize = Math.floor(maxPrize/2);
                            (alert("Congratulation!   Your prize is: "+prize));
                            question = confirm('Do you want to play a game?');
                            if(question === !true){
                                (alert("Thank you for a game. Your prize is:" +prize));
                                question = confirm('Do you want to play a game?');
                                if(question === true){
                                    attempt === 0; 
                                }else{
                                    break label;
                                }
                            }else{
                                attempt;
                            }
                        }else if(attempt === 2){
                            attempt--;
                            prize = startPrize + maxPrize;
                            maxPrize = Math.floor(maxPrize/2);
                            (alert("Congratulation!   Your prize is: "+prize));
                            question = confirm('Do you want to play a game?');
                            if(question === !true){
                                (alert("Thank you for a game. Your prize is:" +prize));
                                question = confirm('Do you want to play a game?');
                                if(question === true){
                                    attempt === 0; 
                                }else{
                                    break label;
                                }
                            }else{
                                attempt;
                            }
                        }else if(attempt === 1){
                            attempt--;
                            prize = startPrize + maxPrize;
                            maxPrize = Math.floor(maxPrize/2);
                            (alert("Congratulation!   Your prize is: "+prize));
                            question = confirm('Do you want to play a game?');
                            if(question === !true){
                                (alert("Thank you for a game. Your prize is:" +prize));
                                question = confirm('Do you want to play a game?');
                                if(question === true){
                                    attempt === 0; 
                                }else{
                                    break label;
                                }
                            }else{
                                attempt;
                            }
                        }
                    }else {
                        attempt--;
                        startPrize = Math.floor(startPrize/2);
                        maxPrize = Math.floor(maxPrize/2);
                        (alert("Your prize is: 0"));
                        question =confirm('Do you want to play a game?');
                        if(question === !true){
                            (alert("Thank you for a game. Your prize is:" +prize));
                            question = confirm('Do you want to play a game?');
                            if(question === true){
                                attempt === 0; 
                            }else{
                                break label;
                            }
                        }else{
                            attempt;
                        }
                    }  
                }
            }
        }
        if(prize >= milion) {
            (confirm('Congratulation! You become a millionaire'));
        }
    }
}else{
    (alert('You did not become a millionaire, but can.'));
}