var person = {
    firstName: "Kim",
    lastName: "Jay",
    get fullName() {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    set fullName(name) {
        var _a;
        _a = name.split(" "), this.firstName = _a[0], this.lastName = _a[1];
    }
};
console.log(person.firstName, person.lastName, person.fullName); // Kim Jay Kim Jay
person.fullName = "jaeyong Kim";
console.log(person); // { firstName: 'jaeyong', lastName: 'Kim', fullName: [Getter/Setter] }
console.log(person.fullName); //
var desc = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(desc);
