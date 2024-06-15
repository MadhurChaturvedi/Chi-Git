const obj = [
    {
        id: 1,
        name: "Madhur",
        data: new Date("2015-03-25")
    },
    {
        id: 2,
        name: "JWK",
        data: new Date("2015-03-25")
    },
    {
        id: 3,
        name: "LooHole",
        data: new Date("2015-03-25")
    },
    {
        id: 4,
        name: "Madhur",
        data: new Date("2015-03-25")
    },
    {
        id: 5,
        name: "Madhur",
        data: new Date("2015-03-25")
    },
    {
        id: 6,
        name: "Madhur",
        data: new Date("2015-03-25")
    },

]

obj.filter(function (item) {
    return item.name === "Madhur"
}).map((item) => (
    console.log(`Name - ${item.name} \n Date - ${item.data}`)
))

var arr = [1,2,3,4];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}