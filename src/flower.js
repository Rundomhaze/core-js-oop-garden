// Тебе пригодится класс Plant.
// Не переживай, он уже доступен этому файлу
// благодаря импорту с помощью require.

const Plant = require('../src/plant');

class Flower extends Plant {
  constructor(name, color, plantName) {
    super(plantName);
    this.flowerName = name;
    this.flowerColor = color;
  }

}

module.exports = Flower;
