const testBtn = document.querySelector(".test");

//!  test class 
class Test {
  constructor(message) {
    this.message = message;
  }
  sayHello() {
    console.log('hello from ' + this.message);
  }
}




testBtn.addEventListener('click', () => {
  let studentNameValue = document.querySelector(".name").value;
  let studentName = new Test(studentNameValue);
  studentName.sayHello();
}); // test message

//! Student Class 
/* The class `Student` defines a blueprint for creating student objects with properties such as name,
lastName, age, subjects, and grades. */
class Student {

  constructor(name, lastName, age, subjects, grades) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.subjects = subjects;
    this.grades = grades;
  };


};

class Register extends Student {
  constructor(name, lastName, age, id) {
    super(name, lastName, age)
    this.id = id
  }

  RegisterStudent() {
    let students = [];
    students = JSON.parse(localStorage.getItem('studentDB')) || [];
    students.push({ name: this.name, age: this.age, id: this.id })
    localStorage.setItem('studentDB', JSON.stringify(students));


    console.log('student registrado ' + this.name + " " + this.lastName + " " + this.age);
    console.log('studentDB', localStorage.getItem('studentDB'));

  }
}

let newStudent = new Register('carlos', 'cordova', 24, 1);
let newStudent2 = new Register('jose', 'cordova', 24);
newStudent.RegisterStudent();
newStudent2.RegisterStudent();