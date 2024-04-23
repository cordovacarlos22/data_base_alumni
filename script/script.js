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
