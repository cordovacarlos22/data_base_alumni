import Student from "./StudenClass";


export default class Register extends Student{
  
  constructor(id, name, lastName, age) {
    super(id, name, lastName, age)
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

}

