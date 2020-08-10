//student score, total possible score


let gradeTester = function(score, possibleScore){
    let totalGrade = (score  / possibleScore) * 100
      if (totalGrade < 59) {
        return console.log(` your grade was ${totalGrade} which is the letter grade F`)
      } 
      else if( totalGrade => 60 && totalGrade <= 69) {
        return console.log(` your grade was ${totalGrade} which is the letter grade D`)
      }
     else if( totalGrade => 70 && totalGrade <= 79) {
        return  console.log(` your grade was ${totalGrade} which is the letter grade C`)
     }
     else if( totalGrade => 80 && totalGrade <= 89) {
        return console.log(` your grade was ${totalGrade} which is the letter grade B`)
     }
     else if( totalGrade => 90 && totalGrade <= 99) {
      return console.log(` your grade was ${totalGrade} which is the letter grade A`)
     }
}

let whatGrade = gradeTester(80, 100)


