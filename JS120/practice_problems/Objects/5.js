let school = {
  students: [],
  validYears: ['1st', '2nd', '3rd', '4th', '5th'],
  addStudent(name, year) {
    if (this.validYear(year)) {
      let newStudent = {
        name: name,
        year: year,
        courses: []
      };
      this.students.push(newStudent);
      return newStudent;
    } else {
      console.log(`Invalid year. Try again.`);
    }
  },

  validYear(year) {
    return this.validYears.includes(year);
  },

  enrollStudent(student, course) {
    student.courses.push(course);
  },

  addGrade(student, code, grade) {
    for (let idx = 0; idx < student.courses.length; idx++) {
      if (student.courses[idx].code === code) {
        student.courses[idx].grade = grade;
      }
    }
  },

  getReportCard(student) {
    for (let idx = 0; idx < student.courses.length; idx++) {
      if (student.courses[idx].grade) {
        console.log(`${student.courses[idx].name}: ${student.courses[idx].grade}`);
      } else console.log(`${student.courses[idx].name}: In Progress`);
    }
  },

  courseReport(courseName) {
    let totalGrades = 0;
    let totalStudents = 0;
    console.log(`=${courseName} Grades=`);
    for (let idx = 0; idx < this.students.length; idx++) {
      for (let idx2 = 0; idx2 < this.students[idx].courses.length; idx2++) {
        if (this.students[idx].courses[idx2].name === courseName) {
          if (typeof this.students[idx].courses[idx2].grade === 'number') {
            console.log(`${this.students[idx].name}: ${this.students[idx].courses[idx2].grade}`);
            totalGrades += this.students[idx].courses[idx2].grade;
            totalStudents += 1;
            break;
          }
        }
      }
    }
    console.log('---');
    console.log('Course Average: ' + parseInt((totalGrades / totalStudents), 10));
  }
};


let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, {name: 'Math', code: 101});
school.enrollStudent(foo, {name: 'Advanced Math', code: 102});
school.enrollStudent(qux, {name: 'Math', code: 101});
school.enrollStudent(bar, {name: 'Math', code: 101});
school.enrollStudent(qux, {name: 'Advanced Math', code: 102});

school.addGrade(foo, 101, 75);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);

school.courseReport('Math');