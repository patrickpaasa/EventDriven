function Person(usern, ag, gend) {
    this.username = usern;
    this.age = ag;
    this.gender = gend;
    this.getInfo = function () {
        return `Username is ${this.username}, age is ${this.age}, ${this.gender}`
    }
}