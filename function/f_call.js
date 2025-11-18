let person = {
    fullname : function name(city,country) {
        return this. firstName + " "+ this.lastName;

    }

}
let person1 = {
    firstName: "fathma",
    lastName : "mim"
}
let person2 = {
    firstName: "Mary",
    lastName : "doe"
}
console.log(person.fullname.call(person1,"dhaka","bangladesh"));
