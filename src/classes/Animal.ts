import ZooAnimals from "../interfaces/ZooAnimals";


class Animal implements ZooAnimals {

    species: string;
    hungry: boolean;
    weight: number;
    amount: number;   

    constructor(species: string, hungry: boolean, weight: number, amount: number) {

        this.species = species;
        this.hungry = hungry;
        this.weight = weight;
        this.amount = amount;
    }
  
    makeRollCall(): boolean {
        return this.hungry;
      }
  
}

export default Animal;


/*
  * `Animal` class
  * `species` as a string
  * `hungry` as a boolean
  * `weight` as a number
  * `amount` as a number
  * `makeRollCall()` as a method that returns how many animals of that species are in the zoo and whether they are hungry
  * 
*/