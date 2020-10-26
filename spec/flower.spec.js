describe('a flower', () => {
  let flower;

  beforeEach(() => {
    flower = new Flower('daffodil', 'yellow');
  });

  it('has a name', () => {
    // Тут твой код.
  });

  it('has a color', () => {
    // Тут твой код.
  });

  it('flower is a plant', () => {
    // Цветок является объектом.
    expect(flower).toBeInstanceOf(Object);
    // Цветок является растением.
    expect(flower).toBeInstanceOf(Plant);
    // Цветок является цветком.
    expect(flower).toBeInstanceOf(Flower);
  });
});
