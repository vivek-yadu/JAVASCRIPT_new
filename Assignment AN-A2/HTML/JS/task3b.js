let data = [{ id: 'A441', sales: [10, 12, 13, 10, 16, 22, 30] },
    { id: 'B234', sales: [2, 4, 3, 4, 2, 6, 8, 10] },
    { id: 'A617', sales: [5, 5, 5, 5, 5] },
    { id: 'C229', sales: [9, 7, 6, 8, 8, 10, 9, 3, 4, 5, 6] },
    { id: 'D412', sales: [25, 25, 23, 21] },
    { id: 'A054', sales: [2, 2, 3, 1, 5, 6, 7, 11, 2] },
    { id: 'B955', sales: [1, 1, 1, 1, 1, 1] },
    { id: 'M341', sales: [4, 5, 4, 5, 4] },
    { id: 'H103', sales: [3, 2, 2, 3, 1, 1] },
    { id: 'B199', sales: [6, 5, 4] },
    { id: 'D388', sales: [7, 8, 9, 8, 4, 4, 4, 3, 2, 1] }
]

let newData = data.map((ele) => {
    let total = 0;
    for (let i = 0; i < ele.sales.length; i++) {
        total += ele.sales[i];
    }
    return { id: ele.id, totaSale: total }
})



let sum = 0
for (let i = 0; i < newData.length; i++) {
    sum += newData[i].totaSale
}

console.log(sum)