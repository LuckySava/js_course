var myAge = 14;
var age = myAge % 10;

if ((myAge % 100) >=10 && (myAge % 100) <= 14) {
console.log(`Мой возраст ${myAge} лет`);
} else if (age == 1) {
console.log(`Мой возраст ${myAge} год`);
} else if (age == 2 || age == 3 || age == 4) {
console.log(`Мой возраст ${myAge} года`);
} else if (age == 5 || age == 6 || age == 7 || age == 8 || age == 9 || age == 0) {
console.log(`Мой возраст ${myAge} лет`);
}  else {
console.log("Мой возраст 21 год");
};
