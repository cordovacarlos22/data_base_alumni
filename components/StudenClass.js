
/* The `Student` class is being imported from the file located at `@/components/StudentClass`. An
instance of the `Student` class is then created with the following properties: id=1,
firstName='carlos', lastName='cordova', age=25, subject=',math', and grade=10. The
`printStudent` method is then called on this instance to presumably display the student's
information. */

export default class Student {
  constructor(name,lastName,age,subjects,grade) {
    
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.subjects = subjects;
    this.grade = grade;
  }

  printStudent() {
    alert(`Student ${this.name} has been register`)
  }
}

