let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Congratulations, you won!");
} else {
    console.log("aaaaaw, you lost :/");
}