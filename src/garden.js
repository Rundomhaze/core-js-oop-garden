/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

// let garden = {
//     name : "Kula Botanical Garden",
//     location : "Makawao",
//     flowers : [],
//     addFlower : function(flower) {
//         if (flower != null) {
//             this.flowers.push(flower)
//         }
//     },
//     plant : function(addFlowers) {
//         for (let i = 0; i < addFlowers.length; i++) {
//             this.addFlower(addFlowers[i])
//         }
//     },
//     remove: function(flower) {
//         for (let i = 0; i < this.flowers.length; i++) {
//             if (this.flowers[i] == flower) {
//                 this.flowers.splice(i, 1)
//             }
//         }
//     },
//     flowersByColor : function(color) {
//         return this.flowers.filter(flower => flower.color === color)
//     },
//     flowersByName : function(name) {
//         return this.flowers.filter(flower => flower.name === name)
//     }
// }

class Garden {
    constructor() {
        this.name = "Kula Botanical Garden"
        this.location =  "Makawao"
        this.flowers = []
    }

    addFlower = (flower) => {
        if (flower != null) {
            this.flowers.push(flower)
        }
    }

    plant = (addFlowers) => {
        addFlowers.map(flower => this.addFlower(flower))
    }
    remove = (flower) => {
        for (let i = 0; i < this.flowers.length; i++) {
            if (this.flowers[i] == flower) {
                this.flowers.splice(i, 1)
            }
        }

    }
    flowersByColor = (color) => {
        return this.flowers.filter(flower => flower.color === color)
    }

    flowersByName = (name) => {
        return this.flowers.filter(flower => flower.name === name)
    }
}
