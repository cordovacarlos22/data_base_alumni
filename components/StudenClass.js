
/* The `Student` class is being imported from the file located at `@/components/StudentClass`. An
instance of the `Student` class is then created with the following properties: id=1,
firstName='carlos', lastName='cordova', age=25, subject=',math', and grade=10. The
`printStudent` method is then called on this instance to presumably display the student's
information. */

export default class Student {
  constructor(id, name, lastName, age, subjects = [], grades = []) 
    {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.subjects = subjects;
    this.grades = grades;
  }

  // method to  enroll a student 
  enrollStudent() {
    
    let students = [];
    students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({id:this.id, name: this.name, lastName: this.lastName, age: this.age });
    localStorage.setItem('students', JSON.stringify(students));
    // console.log('student registrado ' + this.name + " " + this.lastName + " " + this.age);
    // console.log('studentDB', localStorage.getItem('studentDB'));
  }



  alertStudentEnrollment() {
    alert(`Student ${this.name} has been register`)
  }

  getAllStudents() {
    let students = [];
    students = JSON.parse(localStorage.getItem('students')) || [];
    console.log(students);
  }

  addSubject(subject) {
    this.subjects.push(subject);
  }

  addGrade(grade) {
    this.grade.push(grade);
  }

  // extra functions : 
  // Función para asignar calificaciones a un alumno
  addGrade(subject, grade) {
    this.subjects.push(subject);
    this.grades.push(grade);
  }

  // Función para obtener el promedio de calificaciones de un alumno
  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / this.grades.length;
  }

  // Función para buscar un alumno por nombre
  static searchByName(name) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    return students.filter(student => student.name === name);
  }

  // Función para buscar un alumno por apellido
  static searchByLastName(lastName) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    return students.filter(student => student.lastName === lastName);
  }

  // Función para obtener el promedio del grupo
  static getGroupAverage() {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    if (students.length === 0) return 0;
    const totalAverage = students.reduce((acc, student) => acc + student.getAverageGrade(), 0);
    return totalAverage / students.length;
  }

  // Función para obtener la lista de alumnos ordenados por calificación ascendente
  static sortByGradeAsc() {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    return students.sort((a, b) => a.getAverageGrade() - b.getAverageGrade());
  }

  // Función para obtener la lista de alumnos ordenados por calificación descendente
  static sortByGradeDesc() {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    return students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
  }

};


