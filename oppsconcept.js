function School(grade, section) {
    this.grade = grade;
    this.section = section;

    this.getMessage = () => {
        return 'Welcome to School'
    }

    Object.defineProperty(this, 'privateMessage', {
        get: () => {
            return 'Private Message'
        }
    });
}

School.prototype.protoFunction = function() {
    return 'Proto FUncctioin'
}

let school = new School('45', 'a')

console.log(school);

function Student(name, grade, section) {
    School.call(this, grade, section);
    this.name = name;
}

Student.prototype = Object.create(School.prototype);

Student.prototype.constructor = Student;

let student = new Student('Himanshu', '12', 'A');

console.log(student);