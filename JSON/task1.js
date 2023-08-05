let emp1 = {
    "name": "Sam",
    "dept": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise": true
};
let emp2 = {
    "name": "Mary",
    "dept": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise": true
};
let emp3 = {
    "name": "Bill",
    "dept": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise": false
};
// console.log(emp1);
// console.log(emp2);
// console.log(emp3);

// task 1-a-2 
let companyEmployees = [emp1, emp2, emp3]
let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.com",
    "employees": companyEmployees
};
// console.log(company)



let emp4 = {
    "name": "Anna",
    "dept": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise": false
}

company.employees.push(emp4)
console.log(company)

//totalSalary

function computeSalary(compJSON) {
    let empArr = compJSON.employees;
    let total = 0;
    for (let i = 0; i < empArr.length; i++) {
        let emp = empArr[i]
        total = total + emp.salary;
    }
    return total;
}

// let totalSalary = computeSalary(company);
// console.log('total salary is', totalSalary)

//function ProcessRaise

function processRaise(compJSON) {
    let empArr = compJSON.employees;
    for (let i = 0; i < empArr.length; i++) {
        let emp = empArr[i];
        if (emp.raise) {
            emp.salary = emp.salary * 1.10;
            emp.raise = false;
        }
    }
}

// processRaise(company)
// console.log(company)




function addWfh(compJSON, wfhEmps) {
    let empArr = compJSON.employees;
    for (let i = 0; i < empArr.length; i++) {
        let emp = empArr[i];
        emp.wfh = checkInArray(emp.name, wfhEmps);
    }
}

function checkInArray(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return true;
        }
    }
    return false;
}
const wfhEmps = ['Anna', 'Sam'];
addWfh(company, wfhEmps)
console.log(company)