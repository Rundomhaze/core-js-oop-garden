describe("the garden object", function() {
  it("is named Kula Botanical Garden", function() {
    expect(garden.name).toEqual("Kula Botanical Garden");
  });

  it("is located in Makawao", function() {
    expect(garden.location).toEqual("Makawao");
  });

  describe("has a collection of flowers", function() {
    it("has an empty collection of flowers", function() {
      expect(garden.flowers).toEqual([]);
    });

    describe("adding and removing flowers", function() {
      let daffodil = new Flower("daffodil", "yellow");
      let iris = new Flower("iris", "purple");
      let aster = new Flower("aster", "red");

      beforeEach(function() {
        garden.flowers = [daffodil];
      });

      afterAll(function() {
        garden.flowers = [];
      });


      it("can add a flower to its flowers", function() {
        expect(garden.flowers).toEqual([daffodil]);
        garden.addFlower(iris);
        expect(garden.flowers).toEqual([daffodil, iris]);
      });

      it("can plant multiple flowers", function() {
        expect(garden.flowers).toEqual([daffodil]);
        garden.plant([iris, aster]);
        expect(garden.flowers).toHaveSameElementsAs([daffodil, iris, aster]);
      });

      it("can remove a flower", function() {
        expect(garden.flowers).toEqual([daffodil]);
        garden.remove(daffodil);
        expect(garden.flowers).toEqual([]);
      });
    });

    describe("filtering its flowers", function() {
      it("filters flowers by color", function() {
        let yellowFlower1 = new Flower("daffodil", "yellow")
        let yellowFlower2 = new Flower("buttercup", "yellow")
        let redFlower1 = new Flower("aster", "red")

        garden.flowers = [yellowFlower1, redFlower1, yellowFlower2];
        expect(garden.flowersByColor("yellow")).toHaveSameElementsAs([yellowFlower1, yellowFlower2]);
      });

      it("filters flowers by name", function() {
        let iris1  = new Flower("iris", "purple");
        let iris2  = new Flower("iris", "purple");
        let lavender1 = new Flower("lavender", "purple");

        garden.flowers = [lavender1, iris1, iris2];
        expect(garden.flowersByName("iris")).toHaveSameElementsAs([iris1, iris2]);
      });
    });
  });
});
