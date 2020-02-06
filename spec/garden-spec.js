describe('the garden object', function () {
  let garden;

  beforeEach(function () {
    garden = new Garden('Kula Botanical Garden', 'Makawao', []);
  });

  it('is named Kula Botanical Garden', function () {
    expect(garden.name).toEqual('Kula Botanical Garden');
  });

  it('is located in Makawao', function () {
    expect(garden.location).toEqual('Makawao');
  });

  describe('has a collection of flowers', function () {
    it('has an empty collection of flowers', function () {
      expect(garden.flowers).toEqual([]);
    });

    describe('adding and removing flowers', function () {
      let daffodil = new Flower('daffodil', 'yellow');
      let iris = new Flower('iris', 'purple');
      let aster = new Flower('aster', 'red');

      beforeEach(function () {
        garden.flowers = [daffodil];
      });

      afterAll(function () {
        garden.flowers = [];
      });


      it('can add a flower to its flowers', function () {
        expect(garden.flowers).toEqual([daffodil]);
        garden.addFlower(iris);
        expect(garden.flowers).toEqual([daffodil, iris]);
      });

      it('can plant multiple flowers', function () {
        expect(garden.flowers).toEqual([daffodil]);
        garden.plant([iris, aster]);
        expect(garden.flowers).toHaveSameElementsAs([daffodil, iris, aster]);
      });

      it('can remove a flower', function () {
        expect(garden.flowers).toEqual([daffodil]);
        garden.remove(daffodil);
        expect(garden.flowers).toEqual([]);
      });
    });

    describe('filtering its flowers', function () {
      it('filters flowers by color', function () {
        let yellowDaffodil = new Flower('daffodil', 'yellow')
        let yellowButtercup = new Flower('buttercup', 'yellow')
        let redAster = new Flower('aster', 'red')

        garden.flowers = [yellowDaffodil, redAster, yellowButtercup];

        expect(garden.flowersByColor('yellow'))
          .toHaveSameElementsAs([yellowDaffodil, yellowButtercup]);
      });

      it('filters flowers by name', function () {
        let irisLight = new Flower('iris', 'light-purple');
        let irisDark = new Flower('iris', 'dark-purple');
        let lavender = new Flower('lavender', 'purple');

        garden.flowers = [lavender, irisLight, irisDark];
        expect(garden.flowersByName('iris'))
          .toHaveSameElementsAs([irisLight, irisDark]);
      });
    });
  });
});
