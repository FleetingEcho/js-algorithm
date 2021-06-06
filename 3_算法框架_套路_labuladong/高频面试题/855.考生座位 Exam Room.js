var ExamRoom = function(N) {
  this.N = N;
  this.students =[];
};

ExamRoom.prototype.seat = function() {

      let student = 0;
      if (this.students.length > 0) {
          let dist = this.students[0];//第一个考生的位置；
          let prev = null;
          for (let s of this.students) {
              if (prev != null) {
                  let d = Math.floor((s - prev) / 2);
                  if (d > dist) {
                      dist = d;
                      student = prev + d;
                  }
              }
              prev = s;
          }
          let tempArr=this.students
          // 最右侧情况
          if (this.N - 1 - tempArr[tempArr.length-1] > dist)
              student = this.N - 1;
      }
      // 安排后加入位置;
     if(!this.students.includes(student)) this.students.push(student);
      this.students.sort((a,b)=>a-b);
      return student;
  }

  ExamRoom.prototype.leave = function(p) {
    this.students=this.students.filter(v=> v!==p)
    this.students.sort((a,b)=>a-b)
  }
