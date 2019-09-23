class Earthling {
  constructor(type, area) {
    this.type = type;
    this.area = area;
  }

  getArea() {
    return "Area";
  }
}

const earthling = new Earthling("human", "land");
console.log(earthling);

class Human extends Earthling {
  constructor(name, type, area) {
    super(type, area);
    this.name = name;
    Object.defineProperty(this, "pri", {
      get: () => {
        return "prpererae";
      }
    });
  }
}

const human = new Human("Tony Stark", "Human", "Stark Industry");

console.log(human);
