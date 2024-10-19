//assign 1 
const messageTxt = function (message) {
    alert(message); 
}

const buttonPress =  (callback) => {
    const string = "Hello World!"; 
    callback(string);
}

//assign 2
const checkGuess = () => {
    let a = Math.floor(Math.random() * 100) + 1;
    let guess = parseInt(document.getElementById("guessField").value);
    if (a == guess) {
        alert("Correct"); 
    }
    else {
        alert("Try Again")
    }
}

//assign 3
let clickCount = 0;
document.addEventListener("click", () => {
  clickCount++;
  console.log(`User has clicked ${clickCount} times.`);
});

//assign 4
const applyCallbackToEachElement = (arr, callback) => {
    for (let i = 0; i < arr.length; i++){
        callback.push(arr[i] * arr[i]); 
    }
    return callback;
}

const arr = [1, 2, 3, 4, 5]; 
const squareCallback = [];

const result = (applyCallbackToEachElement(arr, squareCallback));
console.log(result);

//assign 5
const calculateDiscountedPrice = (price, discount, callback) => {
    callback(price - discount);
}

const showDiscountedPrice = (discount) => {
    console.log(discount);
}; 

calculateDiscountedPrice(100, 10, showDiscountedPrice); 