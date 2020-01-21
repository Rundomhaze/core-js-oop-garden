/*

Write a constructor function that produces objects
matching the description in spec/flower_spec.js.

*/

// let Flower = function(name, color) {
//     this.name = name || ""
//     this.color = color || "yellow"
// }

class Flower {
    constructor(name, color) {
        this.name = name || ""
        this.color = color || "yellow"
    }
}
