for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

const mixedArray = [
    1,                  
    "Hello",            
    true,               
    42,                 
    "World",            
    false,              
    null,                
    undefined,          
    { id: 1 },          
    [1, 2]           
];

mixedArray.forEach(element => {
    console.log(`value: ${element}, type: ${typeof element}`);
});

for (let i = 0; i < mixedArray.length; i++) {
    console.log(`type: ${typeof mixedArray[i]}`);
}

let j = 0;
while (j < mixedArray.length) {
    console.log(`type: ${typeof mixedArray[j]}`);
    j++;
}

let k = 0;
do {
    console.log(`type: ${typeof mixedArray[k]}`);
    k++;
} while (k < mixedArray.length);

const people = [
    { name: 'Oleg', age: 25, pets: ['cat'] },
    { name: 'Anna', age: 19, pets: [] },
    { name: 'Max', age: 30, pets: ['dog', 'fish'] },
    { name: 'Kate', age: 15, pets: ['hamster'] }
];

const adults = people.filter(person => person.age > 20);
console.log("people older than 20:", adults);

const peopleWithNewPets = people.map(person => {
    return {
        ...person,
        pets: [...person.pets, 'parrot']
    };
});
console.log("updated list with new pets:", peopleWithNewPets);

const arr = new Array(10).fill(42);
console.log("initial array:", arr);

arr.splice(4, 0, "answer");
console.log("array after splice:", arr);

const foundElement = arr.find(el => el === "answer");
console.log("found element:", foundElement);

const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2023,
    isM2: true
};

const keys = Object.keys(laptop);
console.log("object keys:", keys);

const values = Object.values(laptop);
console.log("object values :", values);

const hasModel = Object.hasOwn(laptop, 'model');
const hasPrice = Object.hasOwn(laptop, 'price');

console.log("has attribute 'model'?", hasModel);
console.log("has attribute 'price'?", hasPrice);