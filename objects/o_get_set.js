// Getter দিয়ে property-এর value read-only করতে পারো বা dynamic value generate করতে পারো
const person = {
  firstName: "Mim",
  lastName: "Khatun",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName); 

// Setter দিয়ে validation, transformation বা extra action করতে পারো।
const person1 = {
  firstName: "Mim",
  lastName: "Khatun",

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "Nova Shuvo";  // Setter call হবে

console.log(person.firstName);  // Output: Nova
console.log(person.lastName);   // Output: Shuvo