class Student {
  constructor(name, lastname, yearOfBirthday, gradesArr) {
    this.name = name
    this.lastname = lastname
    this.yearOfBirthday = yearOfBirthday
    this.gradesArr = gradesArr
    this.attendance = new Array(25)
  }

  age() {
    return `${2023 - this.yearOfBirthday} років`
  }

  gpa() {
    return this.gradesArr.reduce((total, el) => {
      return total + el
    }, 0) / this.gradesArr.length
  }

  present() {
    this.attendance.shift()
    this.attendance.push(true)
  }

  absent() {
    this.attendance.shift()
    this.attendance.push(false)
  }

  summary() {
    let averageAttendance = this.attendance.filter((value) => {
      return value === true
    })
    averageAttendance = averageAttendance.length / 25
    if (this.gpa() >= 90 && averageAttendance > 0.9) {
      return 'Молодець!'
    } else if (this.gpa() >= 90 || averageAttendance > 0.9) {
      return 'Добре, але можна краще'
    } else {
      return 'Редиска!'
    }
  }
}

let joy = new Student('Joy', 'Loy', 2000, [50, 20, 90, 100, 100])
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.present()
joy.absent()
joy.absent()
joy.absent()
joy.absent()
joy.absent()
joy.absent()
joy.absent()
console.log(joy);
console.log(joy.age());
console.log(joy.gpa());
console.log(joy.summary());

let lisa = new Student('Lisa', 'Smith', 2003, [90, 70, 100, 100, 100])
lisa.present()
lisa.present()
lisa.present()
lisa.absent()
lisa.present()
lisa.present()
lisa.absent()
lisa.present()
lisa.present()
lisa.present()
lisa.absent()
lisa.present()
lisa.absent()
lisa.present()
lisa.present()
lisa.present()
lisa.present()
lisa.absent()
lisa.absent()
lisa.present()
lisa.present()
lisa.present()
lisa.absent()
lisa.absent()
lisa.absent()
console.log(lisa);
console.log(lisa.age());
console.log(lisa.gpa());
console.log(lisa.summary());