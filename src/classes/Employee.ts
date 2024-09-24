class Employee {
    constructor(
      name: string,
      id: number,
      title: string,
      salary: number,
      private pay: number
    ) {
      this.pay = pay;
    }
  
    receivePay(): number {
      return this.pay;
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