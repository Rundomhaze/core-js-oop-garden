class Garden {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.flowers = [];
  };

  addFlower(flower) {
    return this.flowers.push(flower);
  };

  plant(flowers) {
    flowers.forEach(element => this.flowers.push(element));
  };

  remove() {
    return this.flowers.pop();
  };

  flowersByColor(color) {
    return this.flowers.filter(el => el.flowerColor === color);
  };

  flowersByName(name) {
    return this.flowers.filter(el => el.flowerName === name);
  };

  /*
    Use object literal syntax to create a garden object with
    the attributes and behaviors described in spec/garden_spec.js.
  */
}

module.exports = Garden;
