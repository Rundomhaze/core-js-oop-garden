const Flower = require('../src/flower');
const Plant = require('../src/plant');

describe('a flower', () => {
  let flower;

  beforeEach(() => {
    flower = new Flower('daffodil', 'yellow');
  });

  test('has a name', () => {
    // Your code goes here.
  });

  test('has a color', () => {
    // Your code goes here.
  });

  test('flower is a plant', () => {
    // Flower is an object.
    expect(flower).toBeInstanceOf(Object);
    // Flower is a plant.
    expect(flower).toBeInstanceOf(Plant);
    // Flower is a flower.
    expect(flower).toBeInstanceOf(Flower);
  });
});
