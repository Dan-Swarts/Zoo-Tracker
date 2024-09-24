import Employee from "./Employee.js";
// TODO: Have the ZooWorker class inherit Employee properties
class ZooWorker extends Employee {
    constructor(name, id, title, salary, cleanUniform) {
        super(name, id, title, salary);
        this.cleanUniform = cleanUniform;
        this.cleanUniform = cleanUniform;
    }
    getCleanUniform() {
        return this.cleanUniform;
    }
}
export default ZooWorker;
