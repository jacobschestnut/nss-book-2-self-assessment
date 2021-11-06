const flowers = [
    {
        id: 1,
        color: "White",
        species: "Rose",
        price: 0.90
    },

    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.10
    }

]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id

    const idForNewFlower = maxId + 1

    flowerObject.id = idForNewFlower

    flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    }

    console.log(expensiveFlowers)
    return expensiveFlowers  // Do not change this code
}


findExpensiveFlowers(flowers)


// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

