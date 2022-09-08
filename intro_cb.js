const readline = require('node:readline');


class Clock {
    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(() => { 
            this._tick();
            }, 1000)
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        } else if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;  
        }
        this.printTime();
    }
}

// let c = new Clock();



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum);
    } else if (numsLeft > 0) {
        rl.question('lemme get a number ', response => {
            let num = parseInt(response);
            let partialSum = sum + num;
            console.log(partialSum);
            addNumbers(partialSum, numsLeft - 1, completionCallback);
        })
    }
}
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) { 
    return () => {this.apply(context) 
    }
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

function askIfGreaterThan(el1, el2, callback) {
    rl.question(`is ${el1} > ${el2}? `, response => {
        let ans = response.toLowerCase();
        if (ans === 'y') {
            return callback(true);
        } else {
            return callback(false);
        }
    })
}

let test = [2, 6, 8, 4, 10]

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
   
   if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
        console.log(arr);
        return;
   }
   
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => { 
            if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
                madeAnySwaps = true;
            } 
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        }) 
    }
  }
  
  function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);
  }
  
//   absurdBubbleSort([3, 2, 1], function(arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     rl.close();
//   });
  
// innerBubbleSortLoop(test, 0, false, () => {console.log('BLOOP')})