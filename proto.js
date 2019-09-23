function Proto(name, age) {
    this.name = name;
    this.age = age;
}

Proto.prototype.getSummary = function() {
    return `${this.name}, ${this.age}`;
};

let proto = new Proto('Himanshu', 24);

console.log(proto.getSummary());