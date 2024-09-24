import Employee from "./Employee";

// TODO: Have the ZooWorker class inherit Employee properties
class ZooWorker extends Employee{
  
  constructor(name: string, id: number, title: string, salary: number, private cleanUniform: boolean) {
    super(name,id,title,salary);
    this.cleanUniform = cleanUniform;
  }

  getCleanUniform(): boolean {
    return this.cleanUniform;
  }
}
export default ZooWorker;
