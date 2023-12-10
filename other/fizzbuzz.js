function fizzbuzz(num) {
    if (num % 15 == 0) {
        return "fizzbuzz";
    } else {
        if (num % 3 == 0) {
            return "fizz";
        } else {
            if (num % 5 == 0) {
                return "buzz";
            } else {
                return num;
            }
        }
    }
}

let answer = parseInt(prompt("Please enter the number you would like to fizzbuzz up to: ", 100));

for (let i = 1; i <= answer; i++) {
    console.log(fizzbuzz(i));
}