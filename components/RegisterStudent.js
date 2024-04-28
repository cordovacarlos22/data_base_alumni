import Student from "./StudenClass";


export default class Register extends  Student{
  constructor(id, name, lastName, age) {
    super(id, name, lastName, age)
  }
  
  printRegister() {
    let students = [];
    students = JSON.parse(localStorage.getItem('studentDB')) || [];
    students.push({ name: this.name, lastName: this.lastName, age: this.age })
    localStorage.setItem('studentDB', JSON.stringify(students));


    console.log('student registrado ' + this.name + " " + this.lastName + " " + this.age);
    console.log('studentDB', localStorage.getItem('studentDB'));
  }

}