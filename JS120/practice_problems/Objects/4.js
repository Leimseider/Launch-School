/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${year} year student.`);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      console.log(this.courses);
    },
    addNote(number, string) {
      for (let idx = 0; idx < this.courses.length; idx++) {
        if (this.courses[idx].code === number) {
          if (this.courses[idx].note) {
            this.courses[idx].note += '; ' + string;
          } else {
            this.courses[idx].note = string;
          }
          break;
        }
      }
    },
    updateNote(number, string) {
      for (let idx = 0; idx < this.courses.length; idx++) {
        if (this.courses[idx].code === number) {
          this.courses[idx].note = string;
        }
      }
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) console.log(`${course.name}: ${course.note}`);
      });
    }
  };
}
//updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
//addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"