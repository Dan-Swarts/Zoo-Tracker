class Employee {
    constructor(name, id, title, salary) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
    receivePay(pay) {
        return this.salary;
    }
}
export default Employee;
/*
* `Employee` class
* Implements `Work` interface
* `name` as a string
* `id` as a number
* `title` as a string
* `salary` as a number
* `receivePay()` as a method that takes in a pay(number) as a parameter and returns pay as a number
*/ 
