const person = {
  firstName: "Kim",
  lastName: "Jay",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person.firstName, person.lastName, person.fullName); // Kim Jay Kim Jay

person.fullName = "jaeyong Kim";
console.log(person); // { firstName: 'jaeyong', lastName: 'Kim', fullName: [Getter/Setter] }
console.log(person.fullName); //

let descr = Object.getOwnPropertyDescriptor(person, "firstName"); // jaeyong Kim
console.log(descr); // {value: 'jaeyong', writable: true, enumerable: true, configurable: true}
// getOwnPropertyDescriptor
