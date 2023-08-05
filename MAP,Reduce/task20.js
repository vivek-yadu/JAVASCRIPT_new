let cars = [{ model: "Swift Dzire VXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Silver", "Blue", "Red"] },
    { model: "Etios SMi", make: "Toyota", fuel: "Diesel", colors: ["White", "Grey", "Black"] },
    { model: "City AXi", make: "Honda", fuel: "Petrol", colors: ["Grey", "Blue", "Black"] },
    { model: "Swift DXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Red", "Black"] },
    { model: "Etios VXi", make: "Toyota", fuel: "Diesel", colors: ["White", "Silver", "Black", "Yellow"] },
    { model: "City ZXi", make: "Honda", fuel: "Petrol", colors: ["Silver", "Blue", "Red"] },
    { model: "Alto SXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Red", "Blue", "Yellow"] },
    { model: "Alto VXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Silver", "Yellow", "Black"] }
]


function findByColor(cars, color) {
    let sameColor = cars.filter((car) => {
        let carColor = car.colors.find((st) => {
            return st == color
        })
        return carColor
    })
    return sameColor;
}

console.log(findByColor(cars, "Grey"))