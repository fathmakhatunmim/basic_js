let person = {
    name: "Mim",
    old: 22,
    address: "rajshahi",
};

console.log(person, typeof person);

const personJson = JSON.stringify(person);
console.log(personJson, typeof personJson);

const parsedJson = JSON.parse(personJson);
console.log(parsedJson, typeof parsedJson);





