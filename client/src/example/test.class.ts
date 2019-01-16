export class Test {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello(): void {
        console.log("Hello " + this.name + ", I'm an instance of the Test class");
    }
}