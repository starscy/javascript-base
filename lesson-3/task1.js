const  maxNumber = 99;
let number = 0;
let arr = [];


while (number <= maxNumber) {
    number++;
    if (isSimple(number) == true) {
        arr.push(number);
        continue;
    }   

}

console.log(arr); 



function isSimple(n) {
    if (n === 1 || n === 0) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

