describe("a flower", function() {
  let flower;

  beforeEach(function() {
    flower = new Flower("daffodil", "yellow");
  });

  it("has a name", function() {
    expect(flower.name).toEqual("daffodil");
  });

  it("has a color", function() {
    expect(flower.color).toEqual("yellow");
  });
});
