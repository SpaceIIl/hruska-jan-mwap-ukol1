const array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]
array.forEach(function(entry) {
    console.log(entry);
});

console.log("")

const reversedArray = array.reverse()
reversedArray.forEach(function(entry) {
    console.log(entry);
});

console.log("")

array.sort()
array.forEach(function(entry) {
    console.log(entry);
});

console.log("")

const car = {Brand:"Lamborghini", Model:"Aventador", Year:2020}

const Brand = car.Brand
console.log(Brand)
const Model = car.Model
console.log(Model)
const Year = car.Year
console.log(Year)

const randomNumber = Math.floor(Math.random() * 556) + 0
console.log("Náhodné číslo je:", randomNumber)