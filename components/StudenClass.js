
/* The `Student` class is being imported from the file located at `@/components/StudentClass`. An
instance of the `Student` class is then created with the following properties: id=1,
firstName='carlos', lastName='cordova', age=25, subject=',math', and grade=10. The
`printStudent` method is then called on this instance to presumably display the student's
information. */

export default class Student {
  constructor(id, name, lastName, age, subjects = [], grades = []) {
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
    students.push({ id: this.id, name: this.name, lastName: this.lastName, age: this.age, subjects: this.subjects, grades: this.grades});
    localStorage.setItem('students', JSON.stringify(students));
    // console.log('student registrado ' + this.name + " " + this.lastName + " " + this.age);
    // console.log('studentDB', localStorage.getItem('studentDB'));
  }

  searchStudent(id) {
    let students = []
    let userFound = [];
    students = JSON.parse(localStorage.getItem("students"))
    // console.log(students);
    for (let i = 0; i < students.length; i++) {
      if (students[i].id == id) {
       
        userFound = JSON.parse(localStorage.getItem('userFound')) || [];
        if (userFound == false) {
          userFound.push(students[i])
          localStorage.setItem('userFound', JSON.stringify(userFound));
          // window.location.reload()
          console.log("class search by id ", userFound);
          return userFound;
        } else {
          alert('Student already exist')
          return userFound
        }
      }
    }
    if ( userFound == false) {
      alert('Student not found')
    }
    
    
  }

  alertStudentEnrollment() {
    alert(`Student ${this.name} has been register`)
  }

  getAllStudents() {
    let students = [];
    students = JSON.parse(localStorage.getItem('students')) || [];
    console.log(students);
  }

  addSubject(subject, studentsId) {

    // console.log("add subject ", studentsId[0].id)
    let students = JSON.parse(localStorage.getItem("students"));
    for (let i = 0; i < students.length; i++) {
      if (students[i].id == studentsId[i].id ) {
        // Verifica si la propiedad subject es un array
        if (Array.isArray(students[i].subjects)) {
          // Agrega la nueva materia al array existente
          students[i].subjects.push(subject);
        } else {
          // Crea un nuevo array con la materia existente y la nueva materia
          students[i].subject = [students[i].subjects, subject];
        }
      }
    }
    // Guarda los cambios en el almacenamiento local
    localStorage.setItem("students", JSON.stringify(students));
  }


  addGrade(grade, subject, studentsId) {
    let students = JSON.parse(localStorage.getItem("students"));
   
    for (let i = 0; i < students.length; i++) {
      if (students[i].id == studentsId[0].id) {
        // Verifica si la propiedad grades es un array
        console.log("add students", grade, subject, studentsId);
        console.log("students", students[0].id);
        // Corrige la referencia a la propiedad grades
        students[i].grades.push({ grade: grade, subject: subject });
      }
    }
    // Guarda los cambios en el almacenamiento local
    localStorage.setItem("students", JSON.stringify(students));
  }



  // extra functions : 
  // Función para asignar calificaciones a un alumno
  // addGrade(subject, grade) {
  //   this.subjects.push(subject);
  //   this.grades.push(grade);
  // }

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


