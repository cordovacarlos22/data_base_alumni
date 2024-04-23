const testBtn = document.querySelector(".test");

// test class 
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

