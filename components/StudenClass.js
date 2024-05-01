
/* The `Student` class is being imported from the file located at `@/components/StudentClass`. An
instance of the `Student` class is then created with the following properties: id=1,
firstName='carlos', lastName='cordova', age=25, subject=',math', and grade=10. The
`printStudent` method is then called on this instance to presumably display the student's
information. */

export default class Student {
  constructor(name,lastName,age) {
    
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.subjects = [];
    this.grade = [];
  }

  printStudent() {
    alert(`Student ${this.name} has been register`)
  }

  //add a student to array of students
  registerStudent() {
    let students = [];
    students = JSON.parse(localStorage.getItem('studentDB')) || [];
    students.push({ name: this.name, lastName: this.lastName, age: this.age })
    localStorage.setItem('studentDB', JSON.stringify(students));


    // console.log('student registrado ' + this.name + " " + this.lastName + " " + this.age);
    // console.log('studentDB', localStorage.getItem('studentDB'));
  }

  printStudent() {
    alert(`Student ${this.name} has been register`)
  }

  getAllStudents() {
    let students = [];
    students = JSON.parse(localStorage.getItem('studentDB')) || [];
    console.log(students);
  }

  addSubject(subject) {
    this.subjects.push(subject);
  }

  addGrade(grade) {
    this.grade.push(grade);
  }

};


