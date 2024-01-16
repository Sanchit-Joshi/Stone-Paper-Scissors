let boxes = document.querySelectorAll('.box');
let display_result = document.querySelector('.display-area');
let reset = document.querySelector('.reset');
const winning_combinations = [
    "stone",
    "paper",
    "scissors"
];
let player_score = 0;
let computer_score = 0;

let player_choice = "";


boxes.forEach(box => {
    box.addEventListener('click', () => {
        player_choice = box.innerText.toLowerCase();
        console.log(player_choice+" clicked");
        if( player_choice === "stone" ){
            checkwinner( player_choice );
            display();
        }
        else if( player_choice === "paper" ){
            checkwinner( player_choice );
            display();
        }
        else if( player_choice === "scissors" ){
            checkwinner( player_choice );
            display();
        }
         
    });
    reset.addEventListener('click', () => {
        player_score = 0;
        computer_score = 0;
        display_result.innerHTML = "";
    });
});

const display = () => {

display_result.innerHTML += `<br>Player  : Computer  <BR>    ${player_score} -- : -- ${computer_score}`;
}
let checkwinner = ( player_choice) => {
    let computer_choice = winning_combinations[Math.floor(Math.random() * winning_combinations.length)];
    
    if(player_choice === "stone"){

        if( computer_choice === "paper" ){
            computer_score++;
            loss(computer_choice);
        }else if( computer_choice === "scissors" ){
            player_score++;
            win(computer_choice);
        }else{
            tie(computer_choice);
        }
    }
    else if(player_choice === "paper"){
        if( computer_choice === "scissors" ){
            computer_score++;
            loss(computer_choice);
        }else if( computer_choice === "stone" ){
            player_score++;
            win(computer_choice);
        }else{
            tie(computer_choice);
        }
    }
    else if(player_choice === "scissors"){
        if( computer_choice === "stone" ){
            computer_score++;
            loss(computer_choice);
        }else if( computer_choice === "paper" ){
            player_score++;
            win(computer_choice);
        }else{
            tie(computer_choice);
        }
    }
};


const loss = (computer_choice) =>{
    display_result.innerHTML = `You Lose! Computer chose - ${computer_choice}!`;
}

const win = (computer_choice) =>{
    display_result.innerHTML = `You Win! Computer chose - ${computer_choice}!`;
}
const tie = (computer_choice) =>{
    display_result.innerHTML = `It's a Tie!\n Computer chose - ${computer_choice}!`;
}