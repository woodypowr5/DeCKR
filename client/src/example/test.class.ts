export default class Test {
    private name: string;

    constructor(name: string) {
        this.name = name;
        console.log("creating new Test object");
    }

    printGreeting():void {
        console.log("hello" + this.name);
    }
}