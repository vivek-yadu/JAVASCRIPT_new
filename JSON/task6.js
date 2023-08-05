let product1 = {
    "code": "PX101",
    "stock": 15,
    "price": 30
};
let product2 = {
    "code": "PX102",
    "stock": 24,
    "price": 20
};
let product3 = {
    "code": "PX103",
    "stock": 33,
    "price": 10
};

// console.log(product1);
// console.log(product2);
// console.log(product3);

// task 6.2
let shop = {
    "products": [product1, product2, product3]
};

// console.log(shop)

// task 6.3
// function stockQty(compJSON) {
//     let stkArr = compJSON.products
//     let total = 0;
//     for (let i = 0; i < stkArr.length; i++) {
//         let stk = stkArr[i];
//         total = total + stk.stock;
//     }
//     return total
// }

// console.log(stockQty(shop))


// task 6.4
let product4 = {
    "code": "PX104",
    "stock": 10,
    "price": 40
};

shop.products.push(product4);

function stockQty(compJSON) {
    let stkArr = compJSON.products
    let total = 0;
    for (let i = 0; i < stkArr.length; i++) {
        let stk = stkArr[i];
        total = total + stk.stock;
    }
    return total
}


console.log(stockQty(shop))


// let productsToIncrease = [product1, product2];

// function increasePrice(compJSON, productsToIncrease) {
//     let proArr = compJSON.products
//     for (let i = 0; i < proArr.length; i++) {
//         let product = proArr[i];

//         if (productsToIncrease[i] == product) {
//             product.price = product.price * 1.1;
//         }

//     }
// }

// increasePrice(shop, productsToIncrease)
// console.log(shop)