
let basket = [];
let tovar1 = ["Black", 200];
let tovar2 = ["Grey", 400];
let tovar3 =["white",800]

addPrice(tovar1);
addPrice(tovar2);
addPrice(tovar3);
countBasketPrice(basket);

    

function countBasketPrice(array) {
        let sum = 0;
        for (i = 0; i < array.length; i++) {
            sum += array[i];
        }
        console.log(sum);
}
    
function addPrice(array) {
basket.push(array[array.length-1])

}



